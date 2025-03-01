import React from 'react'
import styles from './navbar.module.css';

const TextHearde = () => {
  return (
    <>
        <div className=' bg-gray-200 mt-30 mb-30'>

        <div className='  justify-self-center  ' >
            <div className='flex flex-col gap-5'>
                <h3 className={styles.textH1}>
                Rent, Sell and Buy with us
                </h3>
                 <p className={styles.textpa} >Whether you're buying, selling, or
                 renting, we make the process effortless with expert support and top-tier listings.</p>
            <div className=' flex gap-10 justify-self-center ml-60'>
            <button className={ styles.navbutton1}> Get started</button>
            <button className={ styles.navbutton2}> Learn more</button>
            </div>
            </div>

        </div>


        </div>
        

    
    </>
  )
}

export default TextHearde;