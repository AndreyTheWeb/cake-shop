
import HeaderText from "../headerText/HeaderText";
import AboutUs from "../aboutUs/AboutUs";
import OurBest from "../ourBest/OurBest";


const MainPage = ({cakes}) => {
  return (
    <>
      <HeaderText />
      <AboutUs/>
      <OurBest cakes={ cakes}/>
    </>
  )
}

export default MainPage;