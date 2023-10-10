const initialState = {
    searchLanguage: '',
    jobListings: [],
    userdata: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_LANGUAGE':
        return {
          ...state,
          searchLanguage: action.payload,
        };
      case 'SET_JOB_LISTINGS':
        return {
          ...state,
          jobListings: action.payload,
        };
        case 'USER_DETAILS':
        return {
          ...state,
          userdata: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  