import React from 'react'
import styles from './navbar.module.css';
import CaroselAgent from './CaroselAgent'
import AgentCard from './AgentCard'

const MainAgent = () => {
  return (
   <>
   <div className={styles.mainagaentconta}> 
   <div className={styles.cAgentBar}>

            

<div className={`${styles.cAgentBar1} font-Roboto `}>
Residential
</div>
<div className={`${styles.cAgentBarall} font-Roboto `}>
Commercial
</div>

<div className={`${styles.cAgentBarall} font-Roboto `}>Luxury

</div>
<div className={`${styles.cAgentBarall} font-Roboto `}>
Construction
</div>

<div className={`${styles.cAgentBarall} font-Roboto `}>
Land
</div>

              </div>
    <CaroselAgent/>
    <AgentCard/>

   </div>

   </>
  )
}

export default MainAgent