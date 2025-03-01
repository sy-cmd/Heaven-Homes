import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import styles from './navbar.module.css';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { GrSave } from "react-icons/gr";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CardSlider = () => {
  return (
   <>
      <div className={ `${styles.pslide } mb-10`} >

            <div className={ styles.pslidein }>
              <img className='w-13 h-13 rounded-lg' src="/public/img/3e732aaed2f8d0b3a20f5bbd5b5c4281 (1).jfif" alt="" />
              <h4 className={`${styles.ptext} mt-3 font-Roboto`}>All properties</h4>
            </div>

            <div className={ styles.pslideinAll}>
              <img className='w-13 h-13 rounded-lg' src="/public/img/b7b1af3255f6626f83fb268d34865e73 (1).jfif" alt="" />
              <h4 className={`${styles.ptext} mt-3 font-Roboto`} >For sale</h4>
            </div>

            <div className={ styles.pslideinAll}>
              <img className='w-13 h-13 rounded-lg' src="/public/img/e762852df88447efdbd76ebc4b08bc3b (1).jfif" alt="" />
              <h4 className={`${styles.ptext} mt-3 font-Roboto`}>For rent</h4>
            </div>
            <div className={ styles.pslideinAll}>
              <img className='w-13 h-13 rounded-lg'  src="/public/img/ca95894ce3f7cb7e2c0dd1af8d3b8123 (1).jfif" alt="" />
              <h4 className={`${styles.ptext} mt-3 font-Roboto`}>Apartments</h4>
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
      }}
      >
        <SwiperSlide className='swiper-slide slide-1' >
          <div className={styles.slideMin}>
            <div className={styles.slideImg }>
              <img src="/public/img/5ab48035c2c30df287ccef034c36fead.jfif" alt="" />
            </div>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
              <h5 className={`${styles.slideh5} font-Roboto`} >$822,799.99</h5>
              <p className=''>/month</p>


              </div>
              

              <div className=' flex flex-row gap-2'>
              <div className={` flex flex-row`}>
              <FaRegHeart size={17} height={50} r  /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
              <div className={` flex flex-row`}>
              <IoIosShareAlt size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >17K</p>
              </div>
              <div className={` flex flex-row`}>
              <GrSave size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
             
              </div>
            </div>

            <div className='flex flex-row justify-between '>
              <p className={ `${styles.laspara} font-Roboto `} >1987 E Crestwood Dr Unit 4A,
              Los Angeles, CA 90026</p>

              <div className=' flex flex-row gap-2'>
                <p className={ `${styles.slipara} font-Roboto `}>3 baths</p> <hr />
                <p className={ `${styles.slipara} font-Roboto `}>6 Beds</p>
                <p className={ `${styles.slipara} font-Roboto `}>3.3k sq ft</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide slide-1' >
          <div className={styles.slideMin}>
            <div className={styles.slideImg }>
              <img src="/public/img/cf765f55b43f14c6f9deb46b7fc524a6.jfif" alt="" />
            </div>
            <div className='flex flex-row justify-between'>
              <h5 className={`${styles.slideh5} font-Roboto`} >$822,799.99</h5>

              <div className=' flex flex-row gap-2'>
              <div className={` flex flex-row`}>
              <FaRegHeart size={17} height={50} r  /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
              <div className={` flex flex-row`}>
              <IoIosShareAlt size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >17K</p>
              </div>
              <div className={` flex flex-row`}>
              <GrSave size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
             
              </div>
            </div>

            <div className='flex flex-row justify-between '>
              <p className={ `${styles.laspara} font-Roboto `} >1987 E Crestwood Dr Unit 4A,
              Los Angeles, CA 90026</p>

              <div className=' flex flex-row gap-2'>
                <p className={ `${styles.slipara} font-Roboto `}>3 baths</p> <hr />
                <p className={ `${styles.slipara} font-Roboto `}>6 Beds</p>
                <p className={ `${styles.slipara} font-Roboto `}>3.3k sq ft</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide slide-1' >
          <div className={styles.slideMin}>
            <div className={styles.slideImg }>
              <img src="/public/img/f665c89303db60e671675edb17c1fc06.jfif" alt="" />
            </div>
            <div className='flex flex-row justify-between'>
              <h5 className={`${styles.slideh5} font-Roboto`} >$822,799.99</h5>

              <div className=' flex flex-row gap-2'>
              <div className={` flex flex-row`}>
              <FaRegHeart size={17} height={50} r  /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
              <div className={` flex flex-row`}>
              <IoIosShareAlt size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >17K</p>
              </div>
              <div className={` flex flex-row`}>
              <GrSave size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
             
              </div>
            </div>

            <div className='flex flex-row justify-between '>
              <p className={ `${styles.laspara} font-Roboto `} >1987 E Crestwood Dr Unit 4A,
              Los Angeles, CA 90026</p>

              <div className=' flex flex-row gap-2'>
                <p className={ `${styles.slipara} font-Roboto `}>3 baths</p> <hr />
                <p className={ `${styles.slipara} font-Roboto `}>6 Beds</p>
                <p className={ `${styles.slipara} font-Roboto `}>3.3k sq ft</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide slide-1' >
          <div className={styles.slideMin}>
            <div className={styles.slideImg }>
              <img src="/public/img/5ab48035c2c30df287ccef034c36fead.jfif" alt="" />
            </div>
            <div className='flex flex-row justify-between'>
              <h5 className={`${styles.slideh5} font-Roboto`} >$822,799.99</h5>

              <div className=' flex flex-row gap-2'>
              <div className={` flex flex-row`}>
              <FaRegHeart size={17} height={50} r  /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
              <div className={` flex flex-row`}>
              <IoIosShareAlt size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >17K</p>
              </div>
              <div className={` flex flex-row`}>
              <GrSave size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
             
              </div>
            </div>

            <div className='flex flex-row justify-between '>
              <p className={ `${styles.laspara} font-Roboto `} >1987 E Crestwood Dr Unit 4A,
              Los Angeles, CA 90026</p>

              <div className=' flex flex-row gap-2'>
                <p className={ `${styles.slipara} font-Roboto `}>3 baths</p> <hr />
                <p className={ `${styles.slipara} font-Roboto `}>6 Beds</p>
                <p className={ `${styles.slipara} font-Roboto `}>3.3k sq ft</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide slide-1' >
          <div className={styles.slideMin}>
            <div className={styles.slideImg }>
              <img src="/public/img/cf765f55b43f14c6f9deb46b7fc524a6.jfif" alt="" />
            </div>
            <div className='flex flex-row justify-between'>
              <h5 className={`${styles.slideh5} font-Roboto`} >$822,799.99</h5>

              <div className=' flex flex-row gap-2'>
              <div className={` flex flex-row`}>
              <FaRegHeart size={17} height={50} r  /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
              <div className={` flex flex-row`}>
              <IoIosShareAlt size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >17K</p>
              </div>
              <div className={` flex flex-row`}>
              <GrSave size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
             
              </div>
            </div>

            <div className='flex flex-row justify-between '>
              <p className={ `${styles.laspara} font-Roboto `} >1987 E Crestwood Dr Unit 4A,
              Los Angeles, CA 90026</p>

              <div className=' flex flex-row gap-2'>
                <p className={ `${styles.slipara} font-Roboto `}>3 baths</p> <hr />
                <p className={ `${styles.slipara} font-Roboto `}>6 Beds</p>
                <p className={ `${styles.slipara} font-Roboto `}>3.3k sq ft</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide slide-1' >
          <div className={styles.slideMin}>
            <div className={styles.slideImg }>
              <img src="/public/img/f665c89303db60e671675edb17c1fc06.jfif" alt="" />
            </div>
            <div className='flex flex-row justify-between'>
              <h5 className={`${styles.slideh5} font-Roboto`} >$822,799.99</h5>

              <div className=' flex flex-row gap-2'>
              <div className={` flex flex-row`}>
              <FaRegHeart size={17} height={50} r  /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
              <div className={` flex flex-row`}>
              <IoIosShareAlt size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >17K</p>
              </div>
              <div className={` flex flex-row`}>
              <GrSave size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
             
              </div>
            </div>

            <div className='flex flex-row justify-between '>
              <p className={ `${styles.laspara} font-Roboto `} >1987 E Crestwood Dr Unit 4A,
              Los Angeles, CA 90026</p>

              <div className=' flex flex-row gap-2'>
                <p className={ `${styles.slipara} font-Roboto `}>3 baths</p> <hr />
                <p className={ `${styles.slipara} font-Roboto `}>6 Beds</p>
                <p className={ `${styles.slipara} font-Roboto `}>3.3k sq ft</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide slide-1' >
          <div className={styles.slideMin}>
            <div className={styles.slideImg }>
              <img src="/public/img/5ab48035c2c30df287ccef034c36fead.jfif" alt="" />
            </div>
            <div className='flex flex-row justify-between'>
              <h5 className={`${styles.slideh5} font-Roboto`} >$822,799.99</h5>

              <div className=' flex flex-row gap-2'>
              <div className={` flex flex-row`}>
              <FaRegHeart size={17} height={50} r  /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
              <div className={` flex flex-row`}>
              <IoIosShareAlt size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >17K</p>
              </div>
              <div className={` flex flex-row`}>
              <GrSave size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
             
              </div>
            </div>

            <div className='flex flex-row justify-between '>
              <p className={ `${styles.laspara} font-Roboto `} >1987 E Crestwood Dr Unit 4A,
              Los Angeles, CA 90026</p>

              <div className=' flex flex-row gap-2'>
                <p className={ `${styles.slipara} font-Roboto `}>3 baths</p> <hr />
                <p className={ `${styles.slipara} font-Roboto `}>6 Beds</p>
                <p className={ `${styles.slipara} font-Roboto `}>3.3k sq ft</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide slide-1' >
          <div className={styles.slideMin}>
            <div className={styles.slideImg }>
              <img src="/public/img/cf765f55b43f14c6f9deb46b7fc524a6.jfif" alt="" />
            </div>
            <div className='flex flex-row justify-between'>
              <h5 className={`${styles.slideh5} font-Roboto`} >$822,799.99</h5>

              <div className=' flex flex-row gap-2'>
              <div className={` flex flex-row`}>
              <FaRegHeart size={17} height={50} r  /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
              <div className={` flex flex-row`}>
              <IoIosShareAlt size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >17K</p>
              </div>
              <div className={` flex flex-row`}>
              <GrSave size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
             
              </div>
            </div>

            <div className='flex flex-row justify-between '>
              <p className={ `${styles.laspara} font-Roboto `} >1987 E Crestwood Dr Unit 4A,
              Los Angeles, CA 90026</p>

              <div className=' flex flex-row gap-2'>
                <p className={ `${styles.slipara} font-Roboto `}>3 baths</p> <hr />
                <p className={ `${styles.slipara} font-Roboto `}>6 Beds</p>
                <p className={ `${styles.slipara} font-Roboto `}>3.3k sq ft</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide slide-1' >
          <div className={styles.slideMin}>
            <div className={styles.slideImg }>
              <img src="/public/img/f665c89303db60e671675edb17c1fc06.jfif" alt="" />
            </div>
            <div className='flex flex-row justify-between'>
              <h5 className={`${styles.slideh5} font-Roboto`} >$822,799.99</h5>

              <div className=' flex flex-row gap-2'>
              <div className={` flex flex-row`}>
              <FaRegHeart size={17} height={50} r  /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
              <div className={` flex flex-row`}>
              <IoIosShareAlt size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >17K</p>
              </div>
              <div className={` flex flex-row`}>
              <GrSave size={15} /><p className={ `${styles.slipara} font-Roboto ml-1 `} >90.2k</p>
              </div>
             
              </div>
            </div>

            <div className='flex flex-row justify-between '>
              <p className={ `${styles.laspara} font-Roboto `} >1987 E Crestwood Dr Unit 4A,
              Los Angeles, CA 90026</p>

              <div className=' flex flex-row gap-2'>
                <p className={ `${styles.slipara} font-Roboto `}>3 baths</p> <hr />
                <p className={ `${styles.slipara} font-Roboto `}>6 Beds</p>
                <p className={ `${styles.slipara} font-Roboto `}>3.3k sq ft</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
   
   </>
  )
}

export default CardSlider