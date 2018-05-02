// state argument is not app state, only the state this reducer is responsible for
// default state of null as error return undefined state
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // no valid type, don't care about action
  return state
}