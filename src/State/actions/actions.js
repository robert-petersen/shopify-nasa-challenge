import axios from "axios";

export const getRandomSearch = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_SEARCH_START"
    });

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=10`)
      .then((res) => {
        dispatch({
          type: "GET_SEARCH_SUCCESS", 
          payload:res.data
        });
      })
      .catch((err) => {
        console.log("getAPOD error: ", err);  // remove later
        dispatch({
          type: "GET_SEARCH_FAIL", 
          payload: err
        });
      })
  }
}

export const getDatesSearch = (startDate, endDate) => {
  return (dispatch) => {
    dispatch({
      type: "GET_SEARCH_START"
    });

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=${startDate}&end_date=${endDate}`)
      .then((res) => {
        dispatch({
          type: "GET_SEARCH_SUCCESS", 
          payload:res.data
        });
      })
      .catch((err) => {
        console.log("getAPOD error: ", err);  // remove later
        dispatch({
          type: "GET_SEARCH_FAIL", 
          payload: err
        });
      })
  }
}

export const getAPOD = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_APOD_START"
    });

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        dispatch({
          type: "GET_APOD_SUCCESS", 
          payload:res.data
        });
      })
      .catch((err) => {
        console.log("getAPOD error: ", err);  // remove later
        dispatch({
          type: "GET_APOD_FAIL", 
          payload: err
        });
      })
  }
}

export const addLike = (like) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_LIKE",
      payload: like,
    });
  }
}

export const removeLike = (like) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_LIKE",
      payload: like.date,
    });
  }
}