import './App.css';
import SideBar from './components/SideBar';
import Portfolio from './components/Portfolio';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactMe from './components/ContactMe';

import { useRef, useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [isActive, setActive] = useState(false);

  const toggleNavbar = () => setActive(!isActive);

  const focusAboutMe = useRef();
  const focusPortfolio = useRef();
  const focusContact = useRef();

  const focusOnAboutMe = () => {
    focusAboutMe.current.scrollIntoView({ behavior: 'smooth' });
    toggleNavbar();
};
  const focusOnAboutMeWithOutFeature = () => {
    focusAboutMe.current.scrollIntoView({ behavior: 'smooth' });
};

  const focusOnPortfolio = () => {
    focusPortfolio.current.scrollIntoView({ behavior: 'smooth' });
    toggleNavbar();
  }
  const focusOnPortfolioWithoutFeature = () => {
    focusPortfolio.current.scrollIntoView({ behavior: 'smooth' });
  }

  const focusOnContact = () => {
    focusContact.current.scrollIntoView({ behavior: 'smooth' });
    toggleNavbar();
  }
  const focusOnContactwithOutFeature = () => {
    focusContact.current.scrollIntoView({ behavior: 'smooth' });
  }

 

  return (
    <div>
      <div onClick={toggleNavbar} id={isActive ? "overlay" : ""}></div>
      <Navbar focusPortfolio={focusPortfolio} isActive={isActive} toggle={toggleNavbar}/>
      <SideBar close={toggleNavbar} focusOnPortfolioWithoutFeature={focusOnPortfolioWithoutFeature} focusOnAboutMeWithOutFeature={focusOnAboutMeWithOutFeature} focusOnContactwithOutFeature={focusOnContactwithOutFeature} isActive={isActive} focusOnContact={focusOnContact} focusOnPortfolio={focusOnPortfolio} focusOnAboutMe={focusOnAboutMe}/>
      <Portfolio isActive={isActive} focusPortfolio={focusPortfolio}/>
      <Aboutme isActive={isActive} focusAboutMe={focusAboutMe} />
      <ContactMe isActive={isActive} focusContact={focusContact}/>
      <Footer isActive={isActive} />
    </div>
  );
}

export default App;
