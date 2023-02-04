import './App.css';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import Benefits from './components/Benefits/Benefits';
import Features from './components/Features/Features';
import Work from './components/Work/Work';
import Spend from './components/Spend/Spend';
import WhyBenefits from './components/Whybenefits/WhyBenefits';
import Questions from './components/Questions/Questions';
import AboutUs from './components/AboutUs/Aboutus';
function App() {
  return (
    <>
      <Header />
      <Popup /> 
      <Benefits />
      <Features />
      <Work />
      <Spend />
      <WhyBenefits />
      <Questions />
      <AboutUs />
    </>
  );
}

export default App;
