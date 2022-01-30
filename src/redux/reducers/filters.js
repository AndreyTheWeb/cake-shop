const initialState = {
  sortBy: {
    type: 'rating',
  }
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      sortBy: {type: action.payload}
    }
  }

  return state;
};

export default filters;