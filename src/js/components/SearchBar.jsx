import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

/**
 * @param {any} props
 * @return {element} search bar
 */
/* eslint-disable react/prop-types */
const SearchBar = props =>
  <div className="search-box">
    <Select
      name="form-field-name"
      options={props.sources}
      value={props.value}
      class="search-bar"
      onChange={props.onchange}
      clearable
    />
    <span className="search-btn"><button onClick={props.onclick}> Reload Headlines </button></span>
    <span>
      <select onChange={props.sortAction}>
        {props.sorts}
      </select>
    </span>
  </div>;

SearchBar.defaultProps = {
  sources: [],
  value: {},
  sorts: [],
};

/* eslint-disable react/forbid-prop-types */
SearchBar.propTypes = {
  sources: PropTypes.array,
  value: PropTypes.object,
  sorts: PropTypes.array,
};


export default SearchBar;