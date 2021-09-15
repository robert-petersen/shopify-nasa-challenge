import { UPDATESEARCHRESULTS, UPDATEAPOD, ADDLIKE, REMOVELIKE } from "../actions";

const initialState = {
  apod: {},
  likes: [],
  searchResults: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATESEARCHRESULTS :
      return { ...state, searchResults: action.payload };
    case UPDATEAPOD :
      return { ...state, apod: action.payload };
    case ADDLIKE :
      return { ...state, likes: state.likes.push(action.payload) };
    case REMOVELIKE :
      const newLikes = state.likes.filter( like => like.date !== action.payload)
      return { ...state, likes: newLikes };
    default :
      return state;
  }
}

export default reducer;