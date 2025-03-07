import React from 'react'
import styles from './navbar.module.css';
import card1 from '../assets/public/img/CARD/Annotation 2025-02-26 163344.png';
import card2 from '../assets/public/img/CARD/Annotation 2025-02-26 163411.png';
import card3 from '../assets/public/img/CARD/Annotation 2025-02-26 163441.png';
const Card = () => {
  return (
    <>  
    <div className={styles.card1}>
        <div className={ styles.cardIn}>
            
            <img className=' h-24'  src={card1} alt="" srcset="" />
            <h4 className={`${ styles.cardh4} font-Roboto` }>Rent</h4>
            <p className={ `${styles.cardP} font-Roboto` }>
            Discover flexible rental options that fit your lifestyle. Whether short-term or long-term, we offer homes that suit your budget and preferences.
            </p>
            <button className={ `${styles.cardbtn} font-Roboto`}> Learn more </button>
        </div>

        <div className={ styles.cardIn}>
            
            <img className=' h-24'  src={card2} alt="" srcset="" />
            <h4 className={`${ styles.cardh4} font-Roboto` }>Sell</h4>
            <p className={ `${styles.cardP} font-Roboto` }>
            Sell your property faster and at the best price. With expert marketing and trusted agents, we ensure a seamless selling experience.
            </p>
            <button className={ `${styles.cardbtn} font-Roboto`}> Learn more </button>
        </div>

        <div className={ styles.cardIn}>
            
            <img className=' h-24'  src={card3} alt="" srcset="" />
            <h4 className={`${ styles.cardh4} font-Roboto` }>Buy</h4>
            <p className={ `${styles.cardP} font-Roboto` }>
            Find your dream home with ease. Explore a wide range of properties tailored to your needs, and make the home-buying process smooth and hassle-free.
            </p>
            <button className={ `${styles.cardbtn} font-Roboto`}> Learn more </button>
        </div>
    </div>


    </>
  )
}

export default Card