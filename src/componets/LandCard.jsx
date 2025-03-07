import React from 'react'
import styles from './navbar.module.css';
import landimg1 from '../assets/public/img/land/Annotation 2025-03-05 133535.png';
import landimg2 from '../assets/public/img/land/Annotation 2025-03-05 133644.png';
import landimg3 from '../assets/public/img/land/Annotation 2025-03-05 1335351.png';

const LandCard = () => {
  return (

     <>  
        <div className={styles.card1}>
            <div className={ styles.LandcardIn}>
                
                <img className=' h-24'  src={landimg1} alt="" srcset="" />
                <h4 className={`${ styles.cardh4} font-Roboto` }>Special Use Land</h4>
                <p className={ `${styles.LandcardP} font-Roboto` }>
                Invest in land with unique potential—perfect for hospitals, schools, energy projects, or conservation areas. A rare opportunity for specialized development!
                </p>
                <button className={ `${styles.cardbtn} font-Roboto`}> Learn more </button>
            </div>
    
            <div className={ styles.LandcardIn}>
                
                <img className=' h-24'  src={landimg2} alt="" srcset="" />
                <h4 className={`${ styles.cardh4} font-Roboto` }>Mixed-Use Land</h4>
                <p className={ `${styles.LandcardP} font-Roboto` }>
                Maximize your investment with land that blends residential, commercial, and office spaces. Ideal for developers looking to create thriving, multi-purpose communities!
                </p>
                <button className={ `${styles.cardbtn} font-Roboto`}> Learn more </button>
            </div>
    
            <div className={ styles.LandcardIn}>
                
                <img className=' h-24'   src={landimg3} alt="" srcset="" />
                <h4 className={`${ styles.cardh4} font-Roboto ` }>Recreational Land</h4>
                <p className={ `${styles.LandcardP} font-Roboto` }>
                Own a piece of nature! Perfect for resorts, camping, hunting, or outdoor retreats—turn this land into a profitable getaway destination.
                </p>
                <button className={ `${styles.cardbtn} font-Roboto`}> Learn more </button>
            </div>
        </div>
    
    
        </>
   
  )
}

export default LandCard