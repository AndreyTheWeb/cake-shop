import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { setSortBy } from '../../redux/actions/filters';


import './ourCakes.scss';

import ingredients from '../../resourses/img/ingrediets.jpg'
import devider from '../../resourses/img/header-text-devider.png';
import Filter from '../filter/Filter';


const sortNames = [
  { name: 'популярности', type: 'rating' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' }
];



const OurCakes = ({ cakes }) => {

  const dispatch = useDispatch();

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const {sortBy} = useSelector(({ filters }) => filters);
  console.log(sortBy)
  // useEffect(() => {
  //   dispatch(fetchCakes);
  // }, [sortBy])
  
  return (
    <div>
      <section className='header'>
        <h3>
          Наши кексы
        </h3>
      </section>
      <section className='ingredients'>
        <div className='ingredients__wrapper'>
          <div className='ingredients__img'>
            <img src={ingredients} alt="ingredients" />
          </div>
          
          <div className='ingredients__text'>
            <h4>
              Наши ингредиенты
            </h4>
            <img src={devider} alt="devider" />
            <p>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            </p>
            <p>
              EAfraid at highly months do things on at. Situation recommend objection do intention so questions. 
            </p>
            <p>
              As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.
              Children me laughing we prospect answered followed. At it went is song that held help face.
            </p>
            
          </div>
        </div>
      </section>
      <Filter
        items={sortNames}
        activeSortType={sortBy}
        onClickSortType={ onSelectSortType }/>
      <section className='product'>
        { cakes.map((item) => (
          <div className='our-best__item' key={`${item.name}_${item.id}`}>
            <div className='our-best__item_img'>
            <img src={item.imageUrl} alt="cake" />
            </div>
            <h5>
              {item.name}
            </h5>
            <p>
              {item.price}  ₽
            </p>
          </div>
          ))
        }
      </section>
    </div>
  )
}

export default OurCakes;