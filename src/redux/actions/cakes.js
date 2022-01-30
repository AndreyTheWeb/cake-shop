import axios from 'axios';

export const fetchCakes = (sortBy) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios.get(`http://localhost:3001/cakes?_sort=${sortBy.type}&_order=asc`)
  .then(({ data }) => {
    dispatch(setCakes(data));
    
    // setCakes(data.cakes);
  }); 
}

export const setCakes = (items) => ({
  type: 'SET_CAKES',
  payload: items,
});