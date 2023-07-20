import styles from './banner.module.scss'
import Image from 'next/image'


export default function Banner() {
  return (
    <div className={styles.swipeSlide}>
        <div className={styles.slide}>
            <Image
                src="https://hocthongminh.com/_next/image/?url=%2Fimages%2Fbanner%2Fbanner6.jpg&w=2048&q=90https://hocthongminh.com/images/logo.svg"
                alt="logo"
                width={0}
                height={0}
                style={{ width: '100%', height:'auto'}} 
            />
            

        </div>
        {/* <div className={styles.navigation}>
            <div className={styles.btn}></div>
            <div className={styles.btn}></div>
            <div className={styles.btn}></div>
        </div> */}
        
    </div>
    
  )
}
