import React from 'react'
import styles from './navbar.module.css';
import { FaArrowUpLong,FaCalendarCheck, FaMeta ,FaXTwitter,  FaInstagram  } from "react-icons/fa6";

const Footer = () => {
  return (
   <>

        <div className={styles.footermainC}>

            <div className={styles.footerminC}>
            <div className='flex flex-row gap-2'  >

<img className='w-17 h-17 rounded-3xl ' src="/public/img/logo/Annotation 2025-03-05 162204.png" alt="" srcset="" />

<h3 className={styles.footermainh3}>Haven Homes</h3>
</div>

<div className='flex flex-row gap-27 justify-center justify-self-center items-start w-5xl h-135 '>
<div className='flex flex-col gap-16'>
    <div className='flex flex-col gap-6'>
        <h5 className={`${styles.footermainh5} font-Roboto `}>Deal with us</h5>
        <p className={`${styles.footermainpara} font-Roboto `}>Buy a House</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Sell a House</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Rent a House</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Find an Apartment</p>
    </div>

    <div className='flex flex-col gap-6'>
        <h5 className={`${styles.footermainh5} font-Roboto `}>Build with us</h5>
        <p className={`${styles.footermainpara} font-Roboto `}>Fully Custom Home Plans</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Semi-Custom Home Plans</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Pre-Designed House Plans</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Pricing & Budget</p>
    </div>

</div>

<div className='flex flex-col gap-16'>
    <div className='flex flex-col gap-6'>
        <h5 className={`${styles.footermainh5} font-Roboto `}>About our Agents</h5>
        <p className={`${styles.footermainpara} font-Roboto `}>Meet Our Agents</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Find a Local Agent</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Schedule a Consultation</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Join Our Team</p>
    </div>

    <div className='flex flex-col gap-6'>
        <h5 className={`${styles.footermainh5} font-Roboto `}>About Lands</h5>
        <p className={`${styles.footermainpara} font-Roboto `}>Resort land</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Farm land</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Mix-use land</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Pricing & Budget</p>
        <p className={`${styles.footermainpara} font-Roboto `}>Recreational land</p>
    </div>

</div>

<div className='flex flex-col gap-16'>
    <div className='flex flex-col gap-6'>
        <h5 className={`${styles.footermainh5} font-Roboto `}>Subscribe to Our Newsletter</h5>
        <p className={`${styles.footermainpara} font-Roboto w-90`}>Get the latest updates on properties, market trends, and
        exclusive offers. </p>
        <div className='flex flex-row gap-6'>
            <button className={`${styles.footerbtn} font-Roboto `}> Enter Email</button>
            <button className={`${styles.footerbtn1} font-Roboto `}> Subscribe </button>
        </div>
     
    </div>

    <div className='flex flex-row gap-12 mt-8'>
    <div className='flex flex-col gap-6'>
        <h5 className={`${styles.footermainh5} font-Roboto `}>Contact us</h5>
        <p className={`${styles.footermainpara} font-Roboto `}>📞 +1 (555) 123-4567</p>
        <p className={`${styles.footermainpara} font-Roboto `}> ✉️ info@havenhomes.com</p>
        <p className={`${styles.footermainpara} font-Roboto `}>📍123 Dream Street, New York, NY</p>
       
    </div>

    <div className='flex flex-col gap-3 '>
         <h5 className={`${styles.footermainh5} font-Roboto `}>Contact us</h5>
          <div className={styles.Agentca2contsbgI}> <FaMeta /> </div>
            <div className={styles.Agentca2contsbgI}> <FaXTwitter /></div>
          <div className={styles.Agentca2contsbgI}> <FaInstagram /></div>

    </div>

    </div>

   

</div>
</div>
                

            </div>

          

            <div className='flex flex-col  gap-3 justify-self-center items-center p-4'>
                <p className={`${styles.footermainpara} font-Roboto `} > © 2025 Haven Homes. All rights reserved. </p>
                <p className={`${styles.footermainpara} font-Roboto `} >  Privacy Policy | Terms of Service </p>
            </div>
        </div>
    

   </>
  )
}

export default Footer