import { initialState } from '../store'

// the reducer's job is ALWAYS to return a valid state for the application
// the SHAPE of the state you're supposed to return from every case is the SAME
// as the initialValue you're providing to it

// a PURE FUNCTION never mutates its arguments

const booksReducer = (state = initialState.books, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default booksReducer
