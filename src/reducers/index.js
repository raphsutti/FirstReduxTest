import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// mapping of the states
const rootReducer = combineReducers({
  // key "books" assign to BooksReducer
  books: BooksReducer
  // state: (state = {}) => state

});

export default rootReducer;
