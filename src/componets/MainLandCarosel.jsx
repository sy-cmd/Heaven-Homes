import React from 'react'
import styles from './navbar.module.css';
import LandCarosel from './LandCarosel';
import LandCard from './LandCard';

const MainLandCarosel = () => {
  return (
    <>
    <div className={ styles.carBg }> 
        <LandCarosel/>
        <LandCard/>
           
           
    </div>

        </>
  )
}

export default MainLandCarosel