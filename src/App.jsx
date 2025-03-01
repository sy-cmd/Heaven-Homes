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
    <Reviews/>
   
   {/* <Testing/> */}
    
    <CardSlider/>
    </div>

     
    </>
  )
}

export default App;