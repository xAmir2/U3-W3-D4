import { GET_JOBS, GET_JOBS_LOADING, GET_JOBS_ERROR } from "../actions";

const initialState = {
  jobs: [],
  loading: false,
  error: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
        error: false,
      };

    case GET_JOBS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default jobsReducer;
