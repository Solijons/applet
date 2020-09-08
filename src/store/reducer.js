const initialState = {
  eventTeams: [],
  papiTeams: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_EVENT_TEAMS':
      return {
        ...state,
        eventTeams: action.value,
      };
    case 'UPDATE_PAPI_TEAMS':
      return {
        ...state,
        papiTeams: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
