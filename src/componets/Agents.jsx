import React from 'react'
import styles from './navbar.module.css';
import { LuHammer ,LuHousePlug , LuHouse} from "react-icons/lu";
import { MdColorLens } from "react-icons/md";
import { FaRegCalendarCheck,FaRegCalendarMinus , FaHandsHelping, FaRegNewspaper, FaRegCalendarAlt, FaFirstOrder, FaRegStar } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { PiFlowerTulip, PiWallBold } from "react-icons/pi";
import { IoIosEye } from "react-icons/io";
import { BiPhoneCall, BiLike,BiSupport } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { FaHandsBound } from "react-icons/fa6";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";

const Agents = () => {
  return (
   <>
       
    <div className={ `${styles.bgS} mt-50`}>
    <div className='flex flex-col justify-self-center mb-10 gap-5'>
            <h3 className={styles.textH1}> Your Partner in Building</h3>
            <p className={styles.textpa}>From vision to reality, we oversee every detail of your construction project, ensuring your dream home becomes a tangible masterpiece.</p>
            <div className='flex flex-row gap-10 ml-80'>
                <button className={ styles.navbutton1}>Get started</button>
                <button className={ styles.herobtn2}>Learn more</button>
            </div>
        </div>

    <div className={ `${styles.content}`} >
        <div className='flex gap-3  justify-center '>
            <div className={styles.tb}>
                 <LuHammer size={33} color='#0A2540' />

                <h6 className={ `${styles.Agnth5} font-Roboto ` }>Quality</h6>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row gap-2'> 
                    <MdColorLens />  <p className={ `${styles.Agntp} font-Roboto  ` }> Tailored Designs</p>
                    </div>
                    <div className='flex flex-row gap-2' >
                    <FaRegCalendarCheck />
                    <p className={ `${styles.Agntp} font-Roboto ` }> Licensed & Insured</p>

                    </div>
                    <div className='flex flex-row gap-2' >
                    <LuHousePlug />
                    <p className={ `${styles.Agntp} font-Roboto ` }>  Quality Craftsmanship</p>

                    </div>
                
                </div>
               
            </div>
            <div className={styles.tb}>
                 <BsLightningCharge size={30} color='#0A2540' backgr />

                <h6 className={ `${styles.Agnth5} font-Roboto ` }>Efficiency</h6>
                <div className='flex flex-col  gap-3'>
                    <div className='flex flex-row gap-2'>
                    <HiOutlineRocketLaunch />
                    <p className={ `${styles.Agntp} font-Roboto ` }>Fast Project Completion</p>

                    </div>
                    <div className='flex flex-row gap-2'>
                    <PiFlowerTulip />
                    <p className={ `${styles.Agntp} font-Roboto ` }> Eco-Friendly Practices</p>

                    </div>
                    <div className='flex flex-row gap-2'>
                    <LuHouse />
                    <p className={ `${styles.Agntp} font-Roboto ` }> End-to-End Management</p>

                    </div>
                </div>
                

            </div>
            <div className={styles.tb}>
                 <FaHandsBound  size={30} color='#0A2540' backgr />

                <h6 className={ `${styles.Agnth5} font-Roboto ` }>Financial Flexibility</h6>
               <div className='flex flex-col  gap-3' >
                 <div className='flex flex-row gap-2'>
                 <FaRegCalendarMinus />
                 <p className={ `${styles.Agntp} font-Roboto ` }>Multiple Payment Plans </p>

                    </div>
                     <div className='flex flex-row gap-2'>
                     <FaHandsHelping />
                     <p className={ `${styles.Agntp} font-Roboto ` }> Trusted by 3000+ Clients</p>

                    </div>
                     <div className='flex flex-row gap-2'>
                     <FaRegNewspaper />
                     <p className={ `${styles.Agntp} font-Roboto ` }> Adjustable Financing Plans</p>

                    </div>
               </div>
            </div>
          
        </div>
        <div className='flex gap-3  justify-center'>
            <div className={styles.tb}>
                 <IoChatboxEllipsesOutline size={30} color='#0A2540' backgr />

                <h6 className={ `${styles.Agnth5} font-Roboto ` }>Transparency</h6>
                <div className='flex flex-col  gap-3'>
                     <div className='flex flex-row gap-2 '>
                     <IoIosEye />
                     <p className={ `${styles.Agntp} font-Roboto ` }>  No Hidden Fees</p>

                    </div>
                     <div className='flex flex-row gap-2'>
                     <FaRegCalendarAlt />
                     <p className={ `${styles.Agntp} font-Roboto ` }>  Regular Progress Updates</p>

                    </div>
                     <div className='flex flex-row gap-2'>
                     <BiSupport />
                     <p className={ `${styles.Agntp} font-Roboto ` }>Dedicated Support Team</p>
                    </div>
                </div>
            </div>
            <div className={styles.tb}>
                 < GoLightBulb size={30} color='#0A2540' backgr />

                <h6 className={ `${styles.Agnth5} font-Roboto ` }>Innovation</h6>

                <div className='flex flex-col  gap-3'>
                     <div className='flex flex-row gap-2'>
                     <LuHouse />
                     <p className={ `${styles.Agntp} font-Roboto ` }> Smart Home Integration</p>

                    </div>
                     <div className='flex flex-row gap-2'>
                     <PiWallBold />
                     <p className={ `${styles.Agntp} font-Roboto ` }>  Sustainable Materials</p>

                    </div>
                     <div className='flex flex-row gap-2'>
                     <MdColorLens />
                     <p className={ `${styles.Agntp} font-Roboto ` }>  Modern Designs</p>
                    </div>
                </div>
            </div>
            <div className={styles.tb}>
                 <FaRegStar size={30} color='#0A2540' backgr />

                <h6 className={ `${styles.Agnth5} font-Roboto ` }>Customer Satisfaction</h6>
                <div className='flex flex-col  gap-3'>
                     <div className='flex flex-row gap-2'>
                     <BiPhoneCall />
                     <p className={ `${styles.Agntp} font-Roboto ` }>  24/7 Client Assistance</p>

                    </div>
                     <div className='flex flex-row gap-2'>
                     <FaFirstOrder /> 
                     <p className={ `${styles.Agntp} font-Roboto ` }> Personalized Servvices</p>

                    </div>

                     <div className='flex flex-row gap-2'>
                     <BiLike />
                     <p className={ `${styles.Agntp} font-Roboto ` }>98% Client Satisfaction</p>

                    </div>
                </div>
                
            </div>
          
        </div>
     </div>
    </div>
   
   </>
  )
}

export default Agents