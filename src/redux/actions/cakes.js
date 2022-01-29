import axios from 'axios';

export const fetchCakes = () => (dispatch) => {
  axios.get('http://localhost:3000/db.json')
  .then(({ data }) => {
    dispatch(setCakes(data));
    
    // setCakes(data.cakes);
  }); 
}

export const setCakes = (items) => ({
  type: 'SET_CAKES',
  payload: items.cakes,
});