import React from 'react'
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <>
    <nav className=' bg-white p-4  flex justify-between items-center'  >
        <p>logo here</p>
        
        <div >
            <ul className={`${styles.home} font-Roboto  `}>
                <li className={styles.active}>Home</li>
                <li className={styles.hover} >Property</li>
                <li className={styles.hover}>Services</li>
                <li className={styles.hover}>Agents</li>
                <li className={styles.hover}>Aboult Us</li>
            </ul>
        </div>
        <div className='flex gap-2 justify-between'>
               <button className={styles.navbutton1}>Buy a house</button>
               <button className={`${styles.navbutton2}`} >Rent a House</button>
        </div>
      
    </nav>

    </>
  )
}

export default NavBar;