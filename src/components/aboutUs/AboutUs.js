import './aboutUs.scss';

import devider from '../../resourses/img/header-text-devider.png';

const AboutUs = () => {
  return (
    <section className='wrapper'>
      <div className='about-us'>
        <h4>
          About Us
        </h4>
        <div className='about-us__devider'>
          <img src={devider} alt="devider" />
        </div>
        <div className='about-us__text'>
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
          </p>
          <br />
          <p>
            Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;