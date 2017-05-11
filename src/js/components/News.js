import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {any} props
 * @return {element} article as li element
 */
const News = props =>
  <li className="flex-item">
    <img src={props.src} alt="news" />
    <span className="news-title">{props.title}</span>
    <a href={props.href} target="_blank" rel="noreferrer noopener">
      <span> Read More <i className="fa fa-external-link" /></span>
    </a>
  </li>;

/*eslint-disable*/
News.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
};

module.exports = News;
