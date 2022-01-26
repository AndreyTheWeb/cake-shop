import React from 'react';

import './ourBest.scss';


const OurBest = ({cakes}) => {
  console.log(cakes);

  return (
    <section>
      <div className='our-best'>
        <h4>
          Наши лучшие предложения
        </h4>
        <div className='our-best__wrapper'>

          {cakes.slice(0,3).map((item, index) => (
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
          ))}

        </div>
      </div>
    </section>
  )
}

export default OurBest;