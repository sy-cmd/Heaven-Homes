import React from 'react'


const TextHeader2 = () => {
  return (
       <>
           <div className=' bg-gray-200 mt-30 mb-30'>
   
           <div className='  justify-self-center  ' >
               <div className='flex flex-col gap-5'>
                   <h3 className={styles.textH1}>
                   Exceptional Land Deals – Secure Yours Today
                   </h3>
                    <p className={styles.textpa} >Discover prime land in sought-after locations, perfect for building, investing, or expanding your vision. Explore our exclusive listings today!</p>
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

export default TextHeader2