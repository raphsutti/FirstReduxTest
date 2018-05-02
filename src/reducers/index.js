import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// mapping of the states
const rootReducer = combineReducers({
  // key "books" assign to BooksReducer
  books: BooksReducer,
  activeBook: ActiveBook
  // state: (state = {}) => state

});

export default rootReducer;
