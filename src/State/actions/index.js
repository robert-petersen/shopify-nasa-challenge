export const UPDATESEARCHRESULTS = "UPDATESEARCHRESULTS";
export const UPDATEAPOD = "UPDATEAPOD";
export const ADDLIKE = "ADDLIKE";
export const REMOVELIKE = "REMOVELIKE";

export const updateSeachResults = (results) => {
  return(dispatch) => {
    dispatch({
      type: UPDATESEARCHRESULTS,
      payload: results,
    });
  }
}

export const updateAPOD = (apod) => {
  return(dispatch) => {
    dispatch({
      type: UPDATEAPOD,
      payload: apod,
    });
  }
}

export const addLike = (like) => {
  return(dispatch) => {
    dispatch({
      type: ADDLIKE,
      payload: like,
    });
  }
}

export const removeLike = (like) => {
  return(dispatch) => {
    dispatch({
      type: REMOVELIKE,
      payload: like.date,
    });
  }
}