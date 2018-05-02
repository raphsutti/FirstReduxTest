// container to render a list of books
import React, { Component } from 'react';
// connect list of books using react-redux
import { connect } from 'react-redux';

class BookList extends Component {
  // create function to return list of books in li elements
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

// when container made, export container - aware of the state by Redux
export default connect(mapStateToProps)(BookList);
