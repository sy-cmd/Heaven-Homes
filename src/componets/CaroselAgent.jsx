import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import styles from './navbar.module.css';
import { FaHeart, FaRegHeart,FaComment,FaRegComment,FaStar,FaRegCalendarCheck  } from "react-icons/fa";
import A1  from '../assets/public/img/agent/4eca6080adf4a40bf122ec344b6016d5 (1).jfif';
import A2 from '../assets/public/img/agent/f8898b4d066033af55f17b0f52d39b46.jfif';
import A3  from '../assets/public/img/agent/fc08a04c070e415a77ae8cfe609bab92.jfif';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CaroselAgent = () => {
  return (
    <>
          <div className={styles.CaroselAmainC}>
          

<div className={ styles.slideMinContainerAgent } >
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
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A1} alt="" />
      <p className={styles.cAgentname1}>Emily soccker</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-red-500`}>Persistent</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
        <p className={`${styles.cAgentpara} font-Roboto bg-purple-500`}>Negotiator</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-pink-500`}>Ethical</p>
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>Age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  37</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 5.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>69 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn} font-Roboto`}> Selected </button>
    </div>

   </div>
  </SwiperSlide>
  <SwiperSlide className='swiper-slide slide-1' >
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A2} alt=" agent photo " />
      <p className={styles.cAgentname1}>Jack sukirr</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-pink-500`}>Ethical</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
       
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
       
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>Age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  32</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 3.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>69 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn2} font-Roboto`}> View Agent </button>
    </div>

   </div>
  </SwiperSlide>
  <SwiperSlide className='swiper-slide slide-1' >
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A3} alt="agent photo" />
      <p className={styles.cAgentname1}>Rob Grant</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-red-500`}>Persistent</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
        <p className={`${styles.cAgentpara} font-Roboto bg-purple-500`}>Negotiator</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
      
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  28</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 3.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>169 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn2} font-Roboto`}>View Agent</button>
    </div>

   </div>
  </SwiperSlide>
  <SwiperSlide className='swiper-slide slide-1' >
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A1} alt="" />
      <p className={styles.cAgentname1}>Emily soccker</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-red-500`}>Persistent</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
        <p className={`${styles.cAgentpara} font-Roboto bg-purple-500`}>Negotiator</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-pink-500`}>Ethical</p>
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>Age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  37</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 5.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>69 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn} font-Roboto`}> Selected </button>
    </div>

   </div>
  </SwiperSlide>
  <SwiperSlide className='swiper-slide slide-1' >
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A2} alt=" agent photo " />
      <p className={styles.cAgentname1}>Jack sukirr</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-pink-500`}>Ethical</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
       
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
       
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>Age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  32</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 3.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>69 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn2} font-Roboto`}> View Agent </button>
    </div>

   </div>
  </SwiperSlide>
  <SwiperSlide className='swiper-slide slide-1' >
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A3} alt="agent photo" />
      <p className={styles.cAgentname1}>Rob Grant</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-red-500`}>Persistent</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
        <p className={`${styles.cAgentpara} font-Roboto bg-purple-500`}>Negotiator</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
      
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  28</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 3.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>169 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn2} font-Roboto`}>View Agent</button>
    </div>

   </div>
  </SwiperSlide>
  <SwiperSlide className='swiper-slide slide-1' >
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A1} alt="" />
      <p className={styles.cAgentname1}>Emily soccker</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-red-500`}>Persistent</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
        <p className={`${styles.cAgentpara} font-Roboto bg-purple-500`}>Negotiator</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-pink-500`}>Ethical</p>
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>Age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  37</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 5.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>69 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn} font-Roboto`}> Selected </button>
    </div>

   </div>
  </SwiperSlide>
  <SwiperSlide className='swiper-slide slide-1' >
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A2} alt=" agent photo " />
      <p className={styles.cAgentname1}>Jack sukirr</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-pink-500`}>Ethical</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
       
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
       
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>Age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  32</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 3.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>69 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn2} font-Roboto`}> View Agent </button>
    </div>

   </div>
  </SwiperSlide>
  <SwiperSlide className='swiper-slide slide-1' >
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A3} alt="agent photo" />
      <p className={styles.cAgentname1}>Rob Grant</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-red-500`}>Persistent</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
        <p className={`${styles.cAgentpara} font-Roboto bg-purple-500`}>Negotiator</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
      
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  28</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 3.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>169 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn2} font-Roboto`}>View Agent</button>
    </div>

   </div>
  </SwiperSlide>
  <SwiperSlide className='swiper-slide slide-1' >
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A1} alt="" />
      <p className={styles.cAgentname1}>Emily soccker</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-red-500`}>Persistent</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
        <p className={`${styles.cAgentpara} font-Roboto bg-purple-500`}>Negotiator</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-pink-500`}>Ethical</p>
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>Age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  37</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 5.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>69 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn} font-Roboto`}> Selected </button>
    </div>

   </div>
  </SwiperSlide>
  <SwiperSlide className='swiper-slide slide-1' >
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A2} alt=" agent photo " />
      <p className={styles.cAgentname1}>Jack sukirr</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-pink-500`}>Ethical</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
       
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
       
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>Age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  32</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 3.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>69 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn2} font-Roboto`}> View Agent </button>
    </div>

   </div>
  </SwiperSlide>
  <SwiperSlide className='swiper-slide slide-1' >
   <div className={styles.cAgentmain}>

    <div>
      <div className={styles.cAgentBarimg}></div>
      <div className={styles.cAgentmini}>
      <img className={styles.cAgentimg} src={A3} alt="agent photo" />
      <p className={styles.cAgentname1}>Rob Grant</p>

      </div>
    
    </div>

    <div className={styles.cAgentcontent}>
      <div className={styles.cAgentcontentInner}>
        <p className={`${styles.cAgentpara} font-Roboto bg-blue-500`}>Responsive</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-green-500`}>Empathetic</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-red-500`}>Persistent</p>
      </div>

      <div  className={styles.cAgentcontentInner} >
        <p className={`${styles.cAgentpara} font-Roboto bg-purple-500`}>Negotiator</p>
        <p className={`${styles.cAgentpara} font-Roboto bg-gray-500`}>Organized</p>
      
      </div>

    </div>

    <div className={styles.cAgentperMain}>
      <div className={styles.cAgentperMin}> 
        
        <p className={`${styles.CagentAllpara} font-Roboto`}>age</p> 
        <div className='flex flex-row gap-1.5'>
        <FaRegCalendarCheck  color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}>  28</p> </div>

        </div>
       

      <div className={styles.cAgentperMin}>
        <p className={`${styles.CagentAllpara} font-Roboto`}> Rating </p>

        <div className='flex flex-row gap-1.5'>
        <FaStar color='#F5B843' />
        <p className={`${styles.CagentSmallpara} font-Roboto`}  > 3.0 </p>

        </div>
        
      </div>

      <div className={styles.cAgentperMin}> 
        <p className={`${styles.CagentAllpara} font-Roboto`}> Reviews </p>

            <div className='flex flex-row gap-1.5'>
            <FaRegComment color='#F5B843' />
            <p className={`${styles.CagentSmallpara} font-Roboto`}>169 </p>

            </div>
        
      </div>

    </div>

    <div>
      <button className={` ${styles.Cagentbtn2} font-Roboto`}>View Agent</button>
    </div>

   </div>
  </SwiperSlide>


 

</Swiper>

</div>

          </div>
       
       
       </>
  )
}

export default CaroselAgent