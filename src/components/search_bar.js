import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="search"/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={(event) => this.props.onSearchTerm(this.refs.search.value)}>Go!</button>
        </span>
      </div>
    )
  }
}

export default SearchBar;
