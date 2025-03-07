import React from 'react'
import styles from './navbar.module.css';
import logo from '../assets/public/img/logo/Annotation 2025-03-05 162204.png';

const NavBar = () => {
  return (
    <>
    <nav className=' bg-white p-4  flex justify-between items-center h-20'  >
        <img className='w-16 h-16 ml-10' src={logo} alt="logo" />
        
        <div >
            <ul className={`${styles.home} font-Roboto mr-100  `}>
                <li className={styles.active}>Home</li>
                <li className={`${styles.hover} ${styles.navbarpara} mt-2`} >Property</li>
                <li className={`${styles.hover} ${styles.navbarpara} mt-2`}>Services</li>
                <li className={`${styles.hover} ${styles.navbarpara} mt-2`}>Agents</li>
                <li className={`${styles.hover} ${styles.navbarpara} mt-2`}>Aboult Us</li>
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