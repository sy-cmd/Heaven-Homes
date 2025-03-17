import React from 'react'
import styles from './navbar.module.css';
import logo from '../assets/public/img/logo/Annotation 2025-03-05 162204.png';
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {


  function showSideBar(){
    const bar = document.getElementById( 'menubtn')
    const nav = document.getElementById('sideBar')
    if (bar){
      bar.addEventListener('click', ()=>{
        nav.style.display ='flex'
        console.log('yes');
      })
    }
    
  }

  function showHide(){
    const bar = document.getElementById( 'closebtn')
    const nav = document.getElementById('sideBar')
    if (bar){
      bar.addEventListener('click', ()=>{
        nav.style.display ='none'
        console.log('yes');
      })
    }
    
  }


  return (
    <>
    <nav  className=' bg-white p-4  flex justify-between items-center w-full h-26'  >


  

    <button className={styles.menubarbtn}   onClick={showSideBar} id='menubtn' >    <IoIosMenu size={50} /></button>
        <img className='w-16 h-16 ml-10' src={logo} alt="logo" />
        
        <div >
            <ul className={`${styles.home} font-Roboto mr-100  `}>
                <li className={styles.active}>Home</li>
                <li className={`${styles.hover} ${styles.navbarpara} font-Roboto mt-2`} >Property</li>
                <li className={`${styles.hover} ${styles.navbarpara} font-Roboto  mt-2`}>Services</li>
                <li className={`${styles.hover} ${styles.navbarpara} font-Roboto  mt-2`}>Agents</li>
                <li className={`${styles.hover} ${styles.navbarpara} font-Roboto  mt-2`}>Aboult Us</li>
            </ul>
        </div>

        <div >
            <ul id='sideBar' className= {`${styles.sidebar} font-Roboto mr-100  `}>
              
             <button  onClick={showHide}   id='closebtn'>  <RxCross1 size={50} color='#0A2540' /> </button>
                
                <li className={`${styles.hover} ${styles.navbarpara} mt-2`}>Home</li>
                <li className={`${styles.hover} ${styles.navbarpara} mt-2`} >Property</li>
                <li className={`${styles.hover} ${styles.navbarpara} mt-2`}>Services</li>
                <li className={`${styles.hover} ${styles.navbarpara} mt-2`}>Agents</li>
                <li className={`${styles.hover} ${styles.navbarpara} mt-2`}>Aboult Us</li>
            </ul>
        </div>

        <div className='flex gap-2 justify-between h-15'>
               <button className={styles.navbutton1}><span className={styles.navp}>Buy a house</span></button>
               <button className={`${styles.navbutton2} `} ><span className={styles.navp}>Rent a house</span></button>
        </div>
      
    </nav>

    </>
  )
}

export default NavBar;