import React from 'react'
import styles from './navbar.module.css';
const SearchBar = () => {
  return (
   <>
        <div className={`${ styles.search} `}>
            <h3 className={`${styles.sh3} font-Roboto`}>Search for Available Property</h3>

                <div className=' flex gap-7'>


                <select className={styles.select}  name="enter location" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
              </select>

            <select className={`${styles.select}`}  name="Propety type" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
            </select>
            <select  className={`${styles.select}`}  name="enter location" id="">
                <option value="">Location</option>
                <option value="">Lusaka</option>
                <option value="">Kabwata</option>
                <option value="">Ndola</option>
                <option value="">KASAMA</option>
            </select>
              <button className={`${ styles.searchbtn} font-Roboto ` } > Search Now</button>
                </div>
        
        </div>
   
   </>
  )
}

export default SearchBar;