const initialState = {
    eventsData: null // Giá trị ban đầu của eventsData
  };
  
  const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'STORE_EVENTS_DATA':
        return {
          ...state,
          eventsData: action.payload
        };
      default:
        return state;
    }
  };
  
  export default eventsReducer;