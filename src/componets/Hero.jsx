import React from 'react'
import styles from './navbar.module.css';

const Hero = () => {
  return (
  <>
    <div className='bg-gray-200'>
      <div className='flex justify-self-center'>
      <img className='w-171.5 h-59 ' src="/public/img/logo/Annotation 2025-03-06 124313.png" alt="" />

      </div>
   
     <div className={`${styles.hereContainer} `}  >
      
        <h1 className={`${styles.heroH1} font-Roboto`}>Your Dream Home Starts Here.</h1>
        <p className={`${styles.heroP} font-Roboto `}>Find your dream home with our expert guidance. We connect you with top-rated properties and provide personalized service every step of the way.</p>

        <div className={ styles.btnC}>
            <button className={`${styles.herobtn1} font-Roboto mr-5`}>Get started</button>
            <button className={styles.herobtn2}>Learn More</button>
        </div>
     </div>
    </div>
  </>
  )
}

export default Hero;