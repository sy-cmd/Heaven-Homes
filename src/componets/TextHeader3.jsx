import React from 'react'
import styles from './navbar.module.css';

const TextHeader3 = () => {
  return (
    <>
     <div className=' bg-gray-200 mt-30 mb-30'>
          
                  <div className='  justify-self-center  ' >
                      <div className='flex flex-col gap-5'>
                          <h3 className={styles.textH1}>
                          Meet Our Expert Agents
                          </h3>
                           <p className={styles.textpa} >Our agents have decades of experience and a proven track record of success in helping clients find their dream homes.</p>
                      <div className=' flex gap-10 justify-self-center ml-60'>
                      <button className={ styles.navbutton1}> Get started</button>
                      <button className={ styles.herobtn2}> Learn more</button>
                      </div>
                      </div>
          
                  </div>
          
          
                  </div>



    </>
  )
}

export default TextHeader3