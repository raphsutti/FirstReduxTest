// book is object with a title
export function selectBook(book) {
  // console.log('A book has been selected:', book.title);
  // return an action - object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}