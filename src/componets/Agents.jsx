import React from 'react'
import styles from './navbar.module.css';

const Agents = () => {
  return (
   <>
       
    <div className={ `${styles.bgS} `}>
    <div className='flex flex-col justify-self-center mb-10'>
            <h3 className={styles.textH1}>Meet Our Expert Agents</h3>
            <p className={styles.textpa}>Our agents have decades of experience and a proven track record of success in helping clients find their dream homes.</p>
            <div className='flex flex-row gap-10 ml-60'>
                <button className={ styles.navbutton1}>Get started</button>
                <button className={ styles.herobtn2}>Learn more</button>
            </div>
        </div>

    <div className={ `${styles.content}`} >
        <div className='bg-gray-200 flex gap-10 pt-4 justify-center'>
            <div className={styles.tb}>
                <h6>Quality</h6>
                <p>Tailored Designs</p>
                <p>Licensed & Insured</p>
                <p>Quality Craftsmanship</p>

            </div>
            <div className={styles.tb}>
                <h6>Quality</h6>
                <p>Tailored Designs</p>
                <p>Licensed & Insured</p>
                <p>Quality Craftsmanship</p>

            </div>
            <div className={styles.tb}>
                <h6>Quality</h6>
                <p>Tailored Designs</p>
                <p>Licensed & Insured</p>
                <p>Quality Craftsmanship</p>

            </div>
        </div>
        <div className='bg-gray-200 flex gap-10 pt-4 justify-center'>
            <div className={styles.tb}>
                <h6>Quality</h6>
                <p>Tailored Designs</p>
                <p>Licensed & Insured</p>
                <p>Quality Craftsmanship</p>

            </div>
            <div className={styles.tb}>
                <h6>Quality</h6>
                <p>Tailored Designs</p>
                <p>Licensed & Insured</p>
                <p>Quality Craftsmanship</p>

            </div>
            <div className={styles.tb}>
                <h6>Quality</h6>
                <p>Tailored Designs</p>
                <p>Licensed & Insured</p>
                <p>Quality Craftsmanship</p>

            </div>
        </div>
    
     </div>
    </div>
   
   </>
  )
}

export default Agents