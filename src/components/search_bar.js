import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor (props){
    super(props);

    this.state = {term: ''}

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();

    // Show products related to searchterm submitted
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          />
      </form>
    );
  }
}

export default SearchBar;
