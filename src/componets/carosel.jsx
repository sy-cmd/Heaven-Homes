import React from 'react'
import styles from './navbar.module.css';
import CardSlider from './CardSlider';
import TextHearde from './TextHearde';
import Card from './Card';



const Carosel = () => {
  return (
   <>
        <div className={ styles.carBg }> 
               
                <CardSlider/>

                <Card/>
        </div>
   </>
  )
}

export default Carosel;