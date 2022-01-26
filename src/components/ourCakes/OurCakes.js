import './ourCakes.scss';

import ingredients from '../../resourses/img/ingrediets.jpg'
import devider from '../../resourses/img/header-text-devider.png';
import Filter from '../filter/Filter';

const categoryItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' }
];

const OurCakes = ({cakes}) => {
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
      <Filter items={categoryItems}/>
      <section className='product'>
        {cakes.map((item, index) => (
          <div className='our-best__item' key={`${item.name}_${index}`}>
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
          ))}
      </section>
    </div>
  )
}

export default OurCakes;