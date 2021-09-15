const initialState = {
  apod: {},
  likes: [],
  searchResults: [],
  isFetching: false,
  error: "",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SEARCH_START" :
      return { ...state, isFetching: true, error: "" };
    case "GET_SEARCH_SUCCESS" :
      return { ...state, isFetching: false, searchResults: action.payload };
    case "GET_SEARCH_FAIL" :
      return { ...state, isFetching: false, error: action.payload };
    case "GET_APOD_START" :
      return { ...state, isFetching: true, error: "" };
    case "GET_APOD_SUCCESS" :
      return { ...state, isFetching: false, apod: action.payload };
    case "GET_APOD_FAIL" :
      return { ...state, isFetching: false, error: action.payload };
    case "ADD_LIKE" :
      return { ...state, likes: state.likes.push(action.payload) };
    case "REMOVE_LIKE" :
      const newLikes = state.likes.filter( like => like.date !== action.payload)
      return { ...state, likes: newLikes };
    default :
      return state;
  }
}

export default reducer;