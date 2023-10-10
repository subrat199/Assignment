export const setSearchLanguage = (language) => ({
    type: 'SET_SEARCH_LANGUAGE',
    payload: language,
  });
  
  export const setJobListings = (listings) => ({
    type: 'SET_JOB_LISTINGS',
    payload: listings,
  });
  export const userdata=(details)=>({
  type:'USER_DETAILS',
  payload: details
  })