import React from 'react'
import styles from './navbar.module.css';
import { FaArrowUpLong,FaCalendarCheck, FaMeta ,FaXTwitter,  FaInstagram  } from "react-icons/fa6";
import { LuHouse,LuHandshake ,LuPhone } from "react-icons/lu";
import { PiStarFourFill } from "react-icons/pi";
import { TbAward } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { VscLocation } from "react-icons/vsc";
import { SlEnvolope } from "react-icons/sl";


function AgentCard() {
  return (
    <>
        <div className='flex flex-row gap-2 '>
        <div>
            <div className={styles.AgentcardMainHU}>
             <h4 className={`${styles.Agentcardh4} font-Roboto `}>Agents Stats</h4>

                <div className={styles.AgentcardMainC}>  
                    <div>
                    <div className={styles.AgentcardInnerC}>
                        <div className='flex flex-col gap-2'>
                         <p className={`${styles.Agentcardpara1} font-Roboto`}>Properties sold</p>
                         <p className={`${styles.Agentcardpara2} font-Roboto`}>523</p>
                  
                   <div className={styles.AgentcardparaDiv}>
                       <div className={styles.AgentcardparaDivInner}>
                       <FaArrowUpLong size={5} color='#05DA5A' />
                       <p className={styles.AgentcardparaDivText2}>20 - 30%</p>

                       </div>
                      
                       <p className={styles.AgentcardparaDivText}>growth in the last 3 months</p>
                   </div>
                  </div>
                  <div className={`${styles.AgentcardIconsBA} bg-red-400 `}>
                  <LuHouse />
                  </div>
               </div>
               <div className={styles.AgentcardInnerC}>
                     <div className='flex flex-col gap-2'>
                   <p className={`${styles.Agentcardpara1} font-Roboto`}>Client Referrals</p>
                   <p className={`${styles.Agentcardpara2} font-Roboto`}>212</p>
                  
                   <div className={styles.AgentcardparaDiv}>
                       <div className={styles.AgentcardparaDivInner}>
                       <LuHandshake  size={5} color='#05DA5A' />
                       <p className={styles.AgentcardparaDivText2}>212</p>

                       </div>
                      
                       <p className={styles.AgentcardparaDivText}>Satisfied clients</p>
                   </div>
                  </div>
                  <div className={`${styles.AgentcardIconsBA} bg-green-400 `}>
                  <LuHandshake size={500}  />
                  </div>
               </div>

                    </div>
                    <div>
                    <div className={styles.AgentcardInnerC}>
                     <div className='flex flex-col gap-2'>
                   <p className={`${styles.Agentcardpara1} font-Roboto`}>Experience</p>
                   <p className={`${styles.Agentcardpara2} font-Roboto`}>15</p>
                  
                   <div className={styles.AgentcardparaDiv}>
                       <div className={styles.AgentcardparaDivInner}>
                       <PiStarFourFill  size={5} color='#05DA5A' />
                       <p className={styles.AgentcardparaDivText2}>15 years</p>

                       </div>
                      
                       <p className={styles.AgentcardparaDivText}>of proven success in the industry</p>
                   </div>
                  </div>
                  <div className={`${styles.AgentcardIconsBA} bg-yellow-400 `}>
                  <FaCalendarCheck />
                  </div>
               </div>
               <div className={styles.AgentcardInnerC}>
                     <div className='flex flex-col gap-2'>
                   <p className={`${styles.Agentcardpara1} font-Roboto`}>Awards</p>
                   <p className={`${styles.Agentcardpara2} font-Roboto`}>13</p>
                  
                   <div className={styles.AgentcardparaDiv}>
                       <div className={styles.AgentcardparaDivInner}>
                       <FaArrowUpLong size={5} color='#05DA5A' />
                       <p className={styles.AgentcardparaDivText2}>100%</p>

                       </div>
                      
                       <p className={styles.AgentcardparaDivText}>Recognized for exceptional performance.</p>
                   </div>
                  </div>
                  <div className={`${styles.AgentcardIconsBA} bg-blue-400 `}>
                  <TbAward />
                  </div>
               </div>

                    </div>
                     
           </div>

    
            </div>
        </div>

        <div >
      
        <div className={styles.Agentca2main}>
        <h4 className={`${styles.Agentcardh4} font-Roboto `}> Contact info</h4>
            <div className={styles.Agentca2min}>
                <div className={styles.Agentca2content1}>
                    <img className={styles.Agentca2img1} src="/public/img/agent/4eca6080adf4a40bf122ec344b6016d5 (1).jfif" alt="" />
                    <div>
                        <div className='flex flex-row gap-1'>
                        <FaStar size={10} color='#F5B843' />

                            <p className={`${styles.Agentca2para1} font-Roboto `}>5.0</p>
                        </div>
                        <div className='flex flex-row'>
                        <VscLocation size={10} />
                            <p className={`${styles.Agentca2para2} font-Roboto `}>Alaska, USA</p>
                        </div>
                    </div>
                    <img className={styles.Agentca2img2} src="/public/img/agent/5abf7fb8c0eb3eab2663263c1235d240 (1).png" alt="" />
                </div>

                <div className={styles.Agentca2cont}>
                    <h4 className={` ${styles.Agentca2contName} font-Roboto `}>Emily Soccker</h4>
                    <p className={`${styles.Agentca2contp1} font-Roboto `}>A highly experienced real estate agent</p>
                    <div className='flex flex-row gap-1'>
                    <span className={`${styles.Agentca2contspan} font-Roboto `}>Email:</span>
                    <p  className={`${styles.Agentca2contsp2} font-Roboto mt-1`}> EmilySoccker.work@gmail.com</p>
                    </div>
                    
                    <div className='flex flex-row gap-1'>
                    <span className={`${styles.Agentca2contspan} font-Roboto  `}>Phone:</span>
                    <p className={`${styles.Agentca2contsp2} font-Roboto  mt-1`}>   +1 239 434 831</p>

                    </div>
                   
                    <div className='flex flex-row gap-3'>
                       <div className={styles.Agentca2contsbgI}> <LuPhone /> </div>
                       <div className={styles.Agentca2contsbgI}> <SlEnvolope /></div>
                       <div className={styles.Agentca2contsbgI}> <FaMeta /> </div>
                       <div className={styles.Agentca2contsbgI}> <FaXTwitter /></div>
                       <div className={styles.Agentca2contsbgI}> <FaInstagram /></div>
                    </div>

                    <div className={styles.Agentca2contsbtn} >
                        <FaCalendarCheck/>
                        <p className={`${styles.Agentca2contsbtntxt} font-Roboto `}>Schedule a Consultation</p>
                    </div>
                </div>
            </div>

        </div>
        </div>

        </div>

       

    </>
  )
}

export default AgentCard