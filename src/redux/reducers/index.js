const initialState = {
  companies: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        companies: state.companies.filter(
          (company) => company._id !== action.payload,
        ),
      };

    default:
      return state;
  }
};

export default mainReducer;
