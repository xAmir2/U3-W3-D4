export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";



export const addToFavouritesAction = (job) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: job,
  };
};

export const removeFromFavouritesAction = (id) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: id,
  };
};



export const getJobsAction = (query) => {
  return async (dispatch) => {
    dispatch({
      type: GET_JOBS_LOADING,
      payload: true,
    });

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");

      if (response.ok) {
        const { data } = await response.json();

        dispatch({
          type: GET_JOBS,
          payload: data,
        });

        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_JOBS_ERROR,
        payload: true,
      });
    }
  };
};