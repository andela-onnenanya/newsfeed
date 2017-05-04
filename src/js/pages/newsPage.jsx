import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';
import News from '../components/News';
import * as NewsActions from '../actions/newsActions';
import NewsStore from '../stores/newsStore';

class NewsPage extends React.Component {
  /*constructor() {
    super();
    this.state = {
      articles : []
    };
  }*/
  constructor() {
    super();
    this.state = {
      articles: [],
      sources: [],
      rawSource: [],
      currentValue: '',
      sortBy: ['top', 'latest'],
      currentSort: '',
    };
    this.getSource =this.getSource.bind(this);
    this.sourceObj = [];
  }

  componentWillMount() {
    NewsActions.getNews({ source: 'al-jazeera-english', sortby: 'top' });
    NewsStore.on('change', () => {
      this.setState({
        articles: NewsStore.getArticles(),
      });
    });
  }

 /* componentWillMount() {
    this.getSource();
  }*/

  componentDidMount() {
    this.getSource();
  }

  getSource() {
    const options = [];
    const rawSource = [];
    axios(`https://newsapi.org/v1/sources?apiKey=${process.env.APIKey}`).then((data) => {
      const source = data.data.sources;
      source.forEach((item) => {
        rawSource.push(item);
        options.push({ value: item.id, label: item.name, sortby: item.sortBysAvailable });
      });
    });
    this.sourceObj = options;
    this.setState({
      sources: options,
      rawSource,
    }, () => {});
  }

  getValue(value) {
    if (value) {
      this.setState({
        currentValue: value,
        sortBy: value.sortby,
      });
    }
  }

  getSorts() {
    const sorts = this.state.sortBy;
    if (sorts) {
      const renderSorts = sorts.map((sort, i) => {
        const key = i;
        return <option key={key} value={sort}>{sort}</option>;
      });
      return renderSorts;
    }
    return sorts;
  }

  searchNews() {
    const source = this.state.currentValue.value;
    if (source) {
      //check if sortBysAvailable is more than one and currentSort exists in state
      const sortby = this.state.sortBy.length > 1 && this.state.currentSort ?
      this.state.currentSort : this.state.sortBy[0];
      NewsActions.getNews({ source, sortby });
    }
  }

  sortAction() {
    return (e) => {
      const source = this.state.currentValue.value;
      const sortby = e.target.value;
      if (source) {
        NewsActions.sortNews({ source, sortby });
      }
      this.setState({
        currentSort: sortby,
      });
    };
  }

  render() {
    const news = this.state.articles;
    const NewsComponents = news.map((item, i) => {
      const key = i;
      return <News key={key} title={item.title} href={item.url} src={item.urlToImage} />;
    });

    return (
      <div>
        <NavBar />
        <SearchBar
          sources={this.state.sources}
          value={this.state.currentValue}
          onchange={this.getValue}
          onclick={this.searchNews}
          sorts={this.getSorts()}
          sortAction={this.sortAction()}
          ref={'select-sort'}
        />
        <NewsList news={NewsComponents} />
      </div>
    );
  }
}

ReactDOM.render(<NewsPage />, document.getElementById('app'));