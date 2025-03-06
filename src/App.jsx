import React from 'react'
import NavBar from './componets/NavBar';
import Hero from './componets/Hero';
import Bar from './componets/Bar';
import SearchBar from './componets/SearchBar';
import TextHearde from './componets/TextHearde';
import Agents from './componets/Agents';
import CardSlider from './componets/CardSlider';
import Testing from './componets/Testing';
import Carosel from './componets/carosel';
import Card from './componets/Card';
import Reviews from './componets/Reviews';
import CaroselAgent from './componets/CaroselAgent';
import AgentCard from './componets/AgentCard';
import MainAgent from './componets/MainAgent';
import LandCarosel from './componets/LandCarosel';
import LandAgent from './componets/LandCard';
import MainLandCarosel from './componets/MainLandCarosel';
import TextHeader2 from './TextHeader2';
import TextHeaader2 from './componets/TextHeaader2';
import BarMain from './componets/BarMain';
import Footer from './componets/Footer';
import TextHeader3 from './componets/TextHeader3';



const App = () => {
  return (
    <>
    <div className='bg-gray-200'>
     <NavBar/>
     <Hero />
      <Bar/>
     <SearchBar/> 
      <TextHearde/> 
     <Carosel/>
     <Agents/>
     <TextHeader3/>
     <MainAgent/>
     <TextHeaader2/>
     <MainLandCarosel/> 
     <Reviews/> 
      <BarMain/>

      <Footer/>
 
    
   
    </div>

     
    </>
  )
}

export default App;