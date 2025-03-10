import React from 'react'
import styles from './navbar.module.css';
import { FaStar } from "react-icons/fa";


import imgRe1 from '../assets/public/img/Reviews/786b226d5d70e39a1dfa0e817fee1e4d.jfif';
import imgRe2 from '../assets/public/img/Reviews/367bb3942476bc56328ab6c43b7a75d8.jfif';
import imgRe3 from '../assets/public/img/Reviews/88ba2be5b4f555a16238a8536bb2372a.jfif';
import imgRe4 from '../assets/public/img/Reviews/3141430bf7e23b086b9a8323f0afd0aa.jfif';
import imgRe5 from '../assets/public/img/Reviews/270613ec07e31b96acbc3a664717b0aa.jfif';
import imgRe6 from '../assets/public/img/Reviews/0db471587300aebc6038b4b88d3a8aa8.jfif';
import imgRe7 from '../assets/public/img/Reviews/0b5a83140e687b3b96f3c0eaa886d70a.jfif';
import imgRe8 from '../assets/public/img/Reviews/325f5b9852308c72dd68e2b446454903.jfif';

const Reviews = () => {
  return (
   <>
        <div className='grid justify-self-center mt-50'>

        <div className='flex flex-col gap-5'>
        <h3 className={`${styles.textH1} font-Roboto `}> Hear from Happy Homeowners</h3>
        <p className={`${styles.textpa} font-Roboto `} >Discover what our satisfied clients have to say about their seamless buying, selling, and renting experiences with us</p>
    </div>
    

    <div className={`${styles.reMain} mt-10`} >
        <div className={styles.reInternalContainer}>  
            <div className='flex flex-row gap-5' >
                <img className={styles.reimg}  src={imgRe1} alt="" srcset="" />
                <div className='flex flex-col  gap-2'>
                <p className={`${styles.rename} font-Roboto`}>Wade Warren</p>
                <p className={`${styles.resubName} font-Roboto`}>McDonald's</p>
                </div>
            </div>
            <p className={`${styles.repara} font-Roboto`}>A company’s success is largely defined by its commitment to customer satisfaction, and Haven Homes excels in this area. Their team prioritizes personalized service, taking the time to understand each client's unique needs. They are responsive, proactive, and always willing to go the extra mile to ensure a smooth experience. The positive testimonials from their clients reflect this dedication. Their team prioritizes personalized service, taking the time to understand each client's unique needs. They are responsive, proactive, and always willing to go the extra mile to ensure a smooth experience. 

                            </p>
                            <div className='flex flex-row gap-2 mt-14'>
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            </div>
        </div>

        <div className='flex flex-col gap-3'>
          
            <div className={ styles.reSmallCol} >
                
                <div className='flex gap-5' >
                <img className={ styles.reimg } src={imgRe3} alt="" />
                   <div className='flex flex-col gap-3 '>
                    <p className={`${styles.rename} font-Roboto`} > Jenny Wilson</p>
                    <p className={`${styles.resubName} font-Roboto`}>IBM</p>
                   </div>
                </div>
                <p className={`${styles.repara} font-Roboto`} >Haven Homes exceeded my expectations. They were knowledgeable, responsive, and truly cared about finding me the right
                     property. I'm so grateful for their help.</p>
                     <div className='flex flex-row gap-2 '>
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            </div>
            </div>
            <div className={ styles.reSmallCol} >
                
                <div className='flex gap-5' >
                <img className={ styles.reimg } src={imgRe4} alt="" />
                   <div className='flex flex-col gap-3 '>
                    <p className={`${styles.rename} font-Roboto`} > Brooklyn Simmons</p>
                    <p className={`${styles.resubName} font-Roboto`}>McDonald's</p>
                   </div>
                </div>
                <p className={`${styles.repara} font-Roboto`} >I was impressed by Haven Homes professionalism and dedication. They went above and beyond to 
                    ensure a smooth and successful transaction. Thank you!</p>
                    <div className='flex flex-row gap-2 '>
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            </div>
            </div>
        </div>

        <div className={styles.reInternalContainer}>  
            <div className='flex flex-row gap-5' >
                <img className={styles.reimg}  src={imgRe2} alt="" srcset="" />
                <div className='flex flex-col  gap-2'>
                <p className={`${styles.rename} font-Roboto`}>Jane Cooper</p>
                <p className={`${styles.resubName} font-Roboto`}>eBay</p>
                </div>
            </div>
            <p className={`${styles.repara} font-Roboto`}>As a seasoned CEO with years of experience in the real estate industry, I have had the opportunity to work with numerous real estate firms, but my experience 
                with Haven Homes has been nothing short of exceptional. Their commitment to excellence, market expertise, and customer-centric approach truly set them apart in a competitive industry. 
                One of the standout qualities of Haven Homes is their deep understanding of the market. Whether it’s residential, commercial, or investment properties, their team possesses unparalleled expertise. Their data-driven insights and ability to anticipate market trends have proven invaluable, ensuring that clients receive the most strategic advice possible.</p>

                <div className='flex flex-row gap-2 '>
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            </div>
        </div>
        
    </div>

    <div className={`${styles.reMain} mt-3 justify-`} >
        <div className={styles.reInternalContainer}>  
            <div className='flex flex-row gap-5' >
                <img className={styles.reimg} src={imgRe5} alt="" srcset="" />
                <div className='flex flex-col  gap-2'>
                <p className={`${styles.rename} font-Roboto`}>Robert Fox</p>
                <p className={`${styles.resubName} font-Roboto`}>Apple</p>
                </div>
            </div>
            <p className={`${styles.repara} font-Roboto`}>Another significant advantage of working with Haven Homes is their extensive industry network. Their strong connections with developers, financial institutions, legal experts, and fellow real estate professionals enable them to offer comprehensive services beyond just buying and selling. Clients benefit from access to off-market properties, exclusive deals, and valuable partnerships. I highly recommend Haven Homes. They provided excellent guidance and support throughout the entire home buying process and made the entire home selling process easy and stress-free. I would definitely use their services again.

                            </p>
                            <div className='flex flex-row gap-2 mt-14'>
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            </div>
        </div>

        <div className='flex flex-col gap-3'>
          
            <div className={ styles.reSmallCol} >
                
                <div className='flex gap-5' >
                <img className={ styles.reimg } src={imgRe6} alt="" />
                   <div className='flex flex-col gap-3 '>
                    <p className={`${styles.rename} font-Roboto`} > Cody Fisher</p>
                    <p className={`${styles.resubName} font-Roboto`}>Gillette</p>
                   </div>
                </div>
                <p className={`${styles.repara} font-Roboto`} >Working with Haven Homes was a pleasure. They were honest, transparent, and always put my needs first. I highly recommend them to anyone looking to buy or sell a home.</p>
                <div className='flex flex-row gap-2'>
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            </div>
            </div>
            <div className={ styles.reSmallCol} >
                
                <div className='flex gap-5' >
                <img className={ styles.reimg } src={imgRe7} alt="" />
                   <div className='flex flex-col gap-3 '>
                    <p className={`${styles.rename} font-Roboto`} > Floyd miles</p>
                    <p className={`${styles.resubName} font-Roboto`}>MasterCard</p>
                   </div>
                </div>
                <p className={`${styles.repara} font-Roboto`} >I highly recommend Haven Homes. They provided excellent guidance and support throughout the entire home buying process. They made it stress-free!</p>

                <div className='flex flex-row gap-2'>
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            </div>
            </div>

            
        </div>

        <div className={styles.reInternalContainer}>  
            <div className='flex flex-row gap-5' >
                <img className={styles.reimg}  src={imgRe8} alt="" srcset="" />
                <div className='flex flex-col  gap-2'>
                <p className={`${styles.rename} font-Roboto`}>Robert Fox</p>
                <p className={`${styles.resubName} font-Roboto`}>Apple</p>
                </div>
            </div>
            <p className={`${styles.repara} font-Roboto`}>Another significant advantage of working with Haven Homes is their extensive industry network. Their strong connections with developers, financial institutions, legal experts, and fellow real estate professionals enable them to offer comprehensive services beyond just buying and selling. Clients benefit from access to off-market properties, exclusive deals, and valuable partnerships. I highly recommend Haven Homes. They provided excellent guidance and support throughout the entire home buying process and made the entire home selling process easy and stress-free. I would definitely use their services again.

                            </p>
                            <div className='flex flex-row gap-2 mt-14'>
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            <FaStar size={20} color='#F5B843' />
                            </div>
        </div>
    </div>
        </div>
  
   </>

  )
}

export default Reviews