import React from 'react'
import styles from './navbar.module.css';
const Bar = () => {
  return (
    <>
        <div className=' flex gap-20 justify-center pt-20 bg-gray-200 pb-20'>
        <div className='flex-col gap-20' >
            <h3 className={`${styles.barh3} font-Roboto mb-4`} >12,475</h3>
            <h5 className={`${styles.barh5} font-Roboto`}>Houses Sold</h5>
        </div>

        <div>
            <h3 className={`${styles.barh3} font-Roboto mb-4`}>22,395</h3>
            <h5 className={`${styles.barh5} font-Roboto`}>Houses Rented</h5>
        </div>

        <div>
            <h3 className={`${styles.barh3} font-Roboto mb-4`} >6,345</h3>
            <h5 className={`${styles.barh5} font-Roboto`}> Houses Constracted</h5>
        </div>

        <div>
            <h3 className={`${styles.barh3} font-Roboto mb-4`} >2,103</h3>
            <h5 className={`${styles.barh5} font-Roboto mb-4`}> Avalable Agents</h5>
        </div>
        </div>
      
    
    </>
  )
}

export default Bar