import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import styles from './navbar.module.css';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { GrSave } from "react-icons/gr";
import miniP1 from '../assets/public/img/3e732aaed2f8d0b3a20f5bbd5b5c4281 (1).jfif';
import miniP2 from '../assets/public/img/land/29bef90b1f63e933257f2188019141c2.jfif';
import miniP3 from '../assets/public/img/land/b94e610c7d6f34809045948f5a47ea67.jfif';
import miniP4 from '../assets/public/img/land/dd2c4ad1d8750bbbab879a10f10925bf.jfif';
import Land1 from '../assets//public/img/land/9929a632df4317539c3922c17e6936fe.jfif';
import Land2 from '../assets/public/img/land/29bef90b1f63e933257f2188019141c2.jfif';
import Land3 from '../assets/public/img/land/e981d2c6c2e3b00582eed7c7298991b5.jfif';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const LandCarosel = () => {
  return (
    <>
    <div className={ `${styles.pslide } mb-10`} >

          <div className={ styles.pslidein }>
            <img className='w-13 h-13 rounded-lg' src={miniP1} alt="" />
            <h4 className={`${styles.ptext} mt-3 font-Roboto`}>All Land Types</h4>
          </div>

          <div className={ styles.pslideinAll}>
            <img className='w-13 h-13 rounded-lg' src={miniP2} alt="" />
            <h4 className={`${styles.ptext} mt-3 font-Roboto`} >Ranch Land</h4>
          </div>

          <div className={ styles.pslideinAll}>
            <img className='w-13 h-13 rounded-lg' src={miniP3}  alt="" />
            <h4 className={`${styles.ptext} mt-3 font-Roboto`}>Resort Land</h4>
          </div>
          <div className={ styles.pslideinAll}>
            <img className='w-13 h-13 rounded-lg'  src={miniP4} alt="" />
            <h4 className={`${styles.ptext} mt-3 font-Roboto`}>Farm Land</h4>
          </div>
    </div>



  <div className={ styles.slideMinContainer } >
    <Swiper 
    modules={ [Pagination , Scrollbar, A11y, Autoplay,   Navigation ]}
    
    
   
    // scrollbar={{ draggable: true }}
    spaceBetween={50}
    grabCursor={true}
    initialSlide={5}
    centeredSlides={true}
    slidesPerView="3"
    speed={3000}
    slideToClickedSlide={true}
    pagination={{ clickable: true }}
    breakpoints={{
      320: { spaceBetween:40 },
      430: { spaceBetween:50 },
      580: { spaceBetween:70 },
      650: { spaceBetween:30 },
      768: {  width: 768,
        slidesPerView: 2, },
    }}
    >
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land1} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Green Acres Farm</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >730 Red Barn Way, Nashville, TN 37218</p>

         
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land2} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Sunnybrook Fields</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >4821 Green Pasture Ln, Lexington, KY 40509</p>

         
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land3} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Stains reserves</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >1520 Harvest Moon Rd, Springfield, IL 62711</p>

         
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land1} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Green Acres Farm</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >730 Red Barn Way, Nashville, TN 37218</p>

         
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land2} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Sunnybrook Fields</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >4821 Green Pasture Ln, Lexington, KY 40509</p>

         
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land3} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Stains reserves</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >1520 Harvest Moon Rd, Springfield, IL 62711</p>

         
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land1} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Green Acres Farm</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >730 Red Barn Way, Nashville, TN 37218</p>

         
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land2} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Sunnybrook Fields</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >4821 Green Pasture Ln, Lexington, KY 40509</p>

         
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land3} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Stains reserves</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >1520 Harvest Moon Rd, Springfield, IL 62711</p>

         
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land1} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Green Acres Farm</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >730 Red Barn Way, Nashville, TN 37218</p>

         
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land2} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Sunnybrook Fields</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >4821 Green Pasture Ln, Lexington, KY 40509</p>

         
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-1' >
        <div className={styles.slideMin}>
          <div className={styles.slideImg }>
            <img src={Land3} alt="" />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h5 className={`${styles.Landslideh5} font-Roboto`} >Stains reserves</h5>
           

            </div>
            

         
          </div>

          <div className='flex flex-row justify-between '>
            <p className={ `${styles.Landlaspara} font-Roboto `} >1520 Harvest Moon Rd, Springfield, IL 62711</p>

         
          </div>
        </div>
      </SwiperSlide>







     
     

    </Swiper>

  </div>
 
 </>
  )
}

export default LandCarosel

















{/* <SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/9929a632df4317539c3922c17e6936fe.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Green Acres Farm</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >730 Red Barn Way, Nashville, TN 37218</p>

 
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/29bef90b1f63e933257f2188019141c2.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Sunnybrook Fields</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >4821 Green Pasture Ln, Lexington, KY 40509</p>

 
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/e981d2c6c2e3b00582eed7c7298991b5.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Stains reserves</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >1520 Harvest Moon Rd, Springfield, IL 62711</p>

 
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/9929a632df4317539c3922c17e6936fe.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Green Acres Farm</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >730 Red Barn Way, Nashville, TN 37218</p>

 
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/29bef90b1f63e933257f2188019141c2.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Sunnybrook Fields</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >4821 Green Pasture Ln, Lexington, KY 40509</p>

 
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/e981d2c6c2e3b00582eed7c7298991b5.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Stains reserves</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >1520 Harvest Moon Rd, Springfield, IL 62711</p>

 
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/9929a632df4317539c3922c17e6936fe.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Green Acres Farm</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >730 Red Barn Way, Nashville, TN 37218</p>

 
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/29bef90b1f63e933257f2188019141c2.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Sunnybrook Fields</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >4821 Green Pasture Ln, Lexington, KY 40509</p>

 
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/e981d2c6c2e3b00582eed7c7298991b5.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Stains reserves</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >1520 Harvest Moon Rd, Springfield, IL 62711</p>

 
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/9929a632df4317539c3922c17e6936fe.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Green Acres Farm</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >730 Red Barn Way, Nashville, TN 37218</p>

 
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/29bef90b1f63e933257f2188019141c2.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Sunnybrook Fields</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >4821 Green Pasture Ln, Lexington, KY 40509</p>

 
  </div>
</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide slide-1' >
<div className={styles.slideMin}>
  <div className={styles.slideImg }>
    <img src="/public/img/land/e981d2c6c2e3b00582eed7c7298991b5.jfif" alt="" />
  </div>
  <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <h5 className={`${styles.Landslideh5} font-Roboto`} >Stains reserves</h5>
   

    </div>
    

 
  </div>

  <div className='flex flex-row justify-between '>
    <p className={ `${styles.Landlaspara} font-Roboto `} >1520 Harvest Moon Rd, Springfield, IL 62711</p>

 
  </div>
</div>
</SwiperSlide> */}