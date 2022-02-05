
import HeaderText from "../headerText/HeaderText";
import OurBest from "../ourBest/OurBest";


const MainPage = ({cakes}) => {
  return (
    <>
      <HeaderText />
      <OurBest cakes={ cakes}/>
    </>
  )
}

export default MainPage;