import styles from './loiich.module.scss'
import Image from 'next/image'
import Phone from '../../public/phone-wrapper.webp'
import image2 from '../../public/image-2.webp'
import image3 from '../../public/image-3.webp'
import image1 from '../../public/image-1.webp'

export default function LoiIch() {
  return (
    <div className={styles.homeUtils}>
        <div className={styles.homeUtilHeader}>
            <div className={styles.homeUtilTitle}>
             Lợi ích
            </div>
            <div className={styles.homeUtilDes}>
                Phương pháp phát triển khả năng tự học của Học Thông Minh
            </div>
        </div>
        <div className={styles.hoemUtilBody}>
            <div className={styles.hoemUtilImage}>
                
                    <Image src={Phone}  alt="phone"/>

                
            </div>
            <div className={styles.swipeWrapper}>
                <div className={styles.swipeSlide}>
                    <div className={styles.imgSlide}>
                        <Image src={image1}  alt="image1" width={134} height={140}/>
                    </div>
                    <div className={styles.utilItemDes}>
                    Học từ những sai lầm với những gợi ý thống kê quá trình học chi tiết                    </div>
                </div>
                <div className={styles.swipeSlide}>
                    <div className={styles.imgSlide}>
                        <Image src={image2}  alt="image2" width={134} height={140}/>
                    </div>
                    <div className={styles.utilItemDes}>
                        Mục tiêu học tập rõ ràng với các chủ đề đã được tổng hợp sẵn từ chương trình học mới nhất
                    </div>
                </div>
                <div className={styles.swipeSlide}>
                    <div className={styles.imgSlide}>
                        <Image src={image3}  alt="image3" width={134} height={140}/>
                    </div>
                    <div className={styles.utilItemDes}>
                    Chủ động lập kế hoạch học tập hợp lý khi biết điểm mạnh yếu qua từng bài thi                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
