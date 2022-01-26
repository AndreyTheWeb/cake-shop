import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setCakes } from "../../redux/actions/cakes";

import AppHeader from '../appHeader/AppHeader';
import MainPage from "../Pages/MainPage";
import AppFooter from "../appFooter/AppFooter";
import OurCakes from "../ourCakes/OurCakes";

// const cakes = [
//   { name: 'Торт "Шоколадница"',  price : 1000 },
//   { name: 'Торт "Арабская ночь"', price : 1200 },
//   { name: 'Торт "Наполеон"', price: 2500 },
//   { name: 'Торт "Губка Боб"', price: 3500 },
//   { name: 'Торт "Сникерс"', price: 3200 },
//   { name: 'Торт "Брауни"', price: 1200 },
//   { name: 'Торт "Искушение Адама"', price: 2900 },
//   { name: 'Торт "Медовик"', price: 1700 },  
// ];


const App = () => {
  
  const dispatch = useDispatch();
  const {cakes} = useSelector(({ cakes }) => {
    return {
      cakes: cakes.items,
    }
  });

  // console.log(state);

  // const [cakes, setCakes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        dispatch(setCakes(data.cakes));
        // setCakes(data.cakes);
    });
    // fetch('http://localhost:3000/db.json')
    //   .then((response) => response.json())
    //   .then(json => {
    //     setCakes(json.cakes);
    //   });
  }, [])

  return (
    <Router>
      <div className="app">
        <AppHeader />
          <Routes>
            <Route path="/" element={<MainPage cakes={cakes}/>}/>
            <Route path="/ourCakes" element={<OurCakes cakes={cakes}/>}/>
          </Routes>
        <AppFooter/>
      </div>
    </Router>
    // <div className="app">
    //   <AppHeader />
    //   <main>
    //     <MainPage cakes={cakes}/>
    //     {/* <OurCakes cakes={cakes}/> */}
    //   </main>
    //   <AppFooter/>
    // </div>
  )
}

export default App;