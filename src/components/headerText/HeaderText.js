import headerTextDevider from '../../resourses/img/header-text-devider.png'; 
import { Link } from 'react-router-dom';

import './headerText.scss';

const HeaderText = () => {
  return (
    <section>
      <div className="header-text">
        <h3 className='header-text__title'>Everything You Love About Cakes</h3>
        <div className='header-text__image'>
          <img src={headerTextDevider} alt="devider" />
        </div>
        <p className='header-text__subtitle'>
          Мы наполняем каждый Ваш день энергией и вкусом
          <br/>
          Хотите попробовать наши тортики?
        </p>
        <Link to="/ourCakes">
        <button className='header-text__btn'>
            more
        </button>
        </Link>
      </div>
    </section>
  )
}

export default HeaderText;