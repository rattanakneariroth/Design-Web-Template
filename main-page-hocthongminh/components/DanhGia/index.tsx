import styles from './danhgia.module.scss'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, EffectCoverflow} from 'swiper/modules';


export default function DanhGia() {
  return (
    <div className={styles.homeFB}>
        <div data-aos="zoom-in" className={styles.homeFBTitle}>
        Mọi người nghĩ gì về chúng tôi
        </div>
        <Swiper
        loop={true}
       spaceBetween={30}
       slidesPerView={3}
       centeredSlides={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }}
      effect={'coverflow'}
      grabCursor={true}
       
       modules={[Autoplay, EffectCoverflow]}
       className={styles.swiper}
    >
      <SwiperSlide >
      {({ isActive }) => (
      <div className={`${styles["swiperSlide"]} ${styles["prev"]}`}>
                    <div className={styles.itemFB}>
                        {isActive && <div className={styles.activeFB}>
                            <Image src="https://hocthongminh.com/images/active-feedback.svg"  alt="feedback" width={80} height={80}  />
                            </div>
                        }
                        <div className={styles.topFB}>
                            <div className={styles.image}>
                                 <Image src="https://hocthongminh.com/images/phuonglinh.svg"  alt="feedback" width={100} height={100}  />

                            </div>
                            <div>
                                <div className={styles.name}>Nguyễn Phương Linh</div>
                                <div className={styles.rate}>
                                    
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                        </span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.contentFB}>
                        Mình thấy web hiệu quả để ôn thi đại học vì cover khá nhiều môn , giao diện cũng dễ nhìn nữa!
                        </div>
                    </div>
                </div>
    )}
        </SwiperSlide>
   
      <SwiperSlide>
      {({ isActive }) => (
        
      <div className={`${styles["swiperSlide"]} ${styles["prev"]}`}>
                    <div className={styles.itemFB}>
                    {isActive && <div className={styles.activeFB}>
                            <Image src="https://hocthongminh.com/images/active-feedback.svg"  alt="feedback" width={80} height={80}  />

                        </div>}
                        <div className={styles.topFB}>
                            <div className={styles.image}>
                                 <Image src="https://hocthongminh.com/images/phuonglinh.svg"  alt="feedback" width={100} height={100}  />

                            </div>
                            <div>
                                <div className={styles.name}>Nguyễn Phương Linh</div>
                                <div className={styles.rate}>
                                    
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                        </span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.contentFB}>
                        Mình thấy web hiệu quả để ôn thi đại học vì cover khá nhiều môn , giao diện cũng dễ nhìn nữa!
                        </div>
                    </div>
                </div>
                
    )}
        </SwiperSlide>
        <SwiperSlide>
      {({ isActive }) => (
     
      <div className={`${styles["swiperSlide"]} ${styles["prev"]}`}>
                    <div className={styles.itemFB}>
                    {isActive && <div className={styles.activeFB}>
                            <Image src="https://hocthongminh.com/images/active-feedback.svg"  alt="feedback" width={80} height={80}  />

                        </div>}
                        <div className={styles.topFB}>
                            <div className={styles.image}>
                                 <Image src="https://hocthongminh.com/images/phuonglinh.svg"  alt="feedback" width={100} height={100}  />

                            </div>
                            <div>
                                <div className={styles.name}>Nguyễn Phúc Trung Kiên</div>
                                <div className={styles.rate}>
                                    
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                        </span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.contentFB}>
                        Mình thấy web hiệu quả để ôn thi đại học vì cover khá nhiều môn , giao diện cũng dễ nhìn nữa!
                        </div>
                    </div>
                </div>
    )}
        </SwiperSlide>
   
        <SwiperSlide>
      {({ isActive }) => (
      
      <div className={`${styles["swiperSlide"]} ${styles["prev"]}`}>
                    <div className={styles.itemFB}>
                    {isActive && <div className={styles.activeFB}>
                            <Image src="https://hocthongminh.com/images/active-feedback.svg"  alt="feedback" width={80} height={80}  />

                        </div>}
                        <div className={styles.topFB}>
                            <div className={styles.image}>
                                 <Image src="https://hocthongminh.com/images/phuonglinh.svg"  alt="feedback" width={100} height={100}  />

                            </div>
                            <div>
                                <div className={styles.name}>Trần Lê Mai Anh</div>
                                <div className={styles.rate}>
                                    
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                        </span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.contentFB}>
                        Mình thấy web hiệu quả để ôn thi đại học vì cover khá nhiều môn , giao diện cũng dễ nhìn nữa!
                        </div>
                    </div>
                </div>
    )}
        </SwiperSlide>
   
        <SwiperSlide>
      {({ isActive }) => (
      
      <div className={`${styles["swiperSlide"]} ${styles["prev"]}`}>
                    <div className={styles.itemFB}>
                    {isActive && <div className={styles.activeFB}>
                            <Image src="https://hocthongminh.com/images/active-feedback.svg"  alt="feedback" width={80} height={80}  />

                        </div>}
                        <div className={styles.topFB}>
                            <div className={styles.image}>
                                 <Image src="https://hocthongminh.com/images/phuonglinh.svg"  alt="feedback" width={100} height={100}  />

                            </div>
                            <div>
                                <div className={styles.name}>Nguyễn Diệu Hương</div>
                                <div className={styles.rate}>
                                    
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>                                        </span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                        </span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.contentFB}>
                        Mình thấy web hiệu quả để ôn thi đại học vì cover khá nhiều môn , giao diện cũng dễ nhìn nữa!
                        </div>
                    </div>
                </div>
    )}
        </SwiperSlide>
   
      
    </Swiper>

    </div>
  )
}