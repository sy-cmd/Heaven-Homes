import React from 'react'
import styles from './navbar.module.css';

const BarMain = () => {
  return (
   <>
        <div className={styles.BarmainContainer}>

            <div className={styles.BarminContainer}>
            <div className={styles.BarInnerC}>
                <h3 className={`${styles.BarinnerCh3} font-Roboto `}> Unlock Your Dream Property Today! </h3>

            </div>

            <div>
            <p  className={`${styles.BarinnerCpara} font-Roboto `}>Join our platform to discover the best homes, investment properties, and
            rental deals—all with expert support every step of the way. Sign up now!</p>

            </div>

            <div className={`${styles.BarinnerChbtn} font-Roboto `}>
                <button>
                Get started
                </button>
            </div>


            </div>

         

        </div>

   </>
  )
}

export default BarMain