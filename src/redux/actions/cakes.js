import axios from 'axios';

export const fetchCakes = (sortBy) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  //если нужен будет доступ со всключенной БД, то нужно раскомментить строчку и в диспаче убрать .cakes 
  // axios.get(`http://localhost:3001/cakes?_sort=${sortBy.type}&_order=asc`)
  axios.get(`http://myjson.dit.upm.es/api/bins/i9sb`)
    .then(({ data }) => {
    console.log(data)
    dispatch(setCakes(data.cakes));
    
    // setCakes(data.cakes);
  }); 
}

export const setCakes = (items) => ({
  type: 'SET_CAKES',
  payload: items,
});