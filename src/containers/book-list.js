// container to render a list of books
import React, { Component } from 'react';
// connect list of books using react-redux
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
// function used to make sure the action flow to reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  // create function to return list of books in li elements
  // set onclick listener to call selectBook
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
        key={book.title} 
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// function to map state to the props - connect react to redux
function mapStateToProps(state) {
  // whatever returns here will show up as props inside BookList
  return {
    // use booklist and store into books for render
    books: state.books
  };
}

// result return from this function end up as props on BookList container
function mapDispatchToProps(dispatch) {
  // when selectBook is called, result passed to all reducers via dispatch
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// when container made, export container - aware of the state by Redux
// promote BookList from component -> container. Needs to know about new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
