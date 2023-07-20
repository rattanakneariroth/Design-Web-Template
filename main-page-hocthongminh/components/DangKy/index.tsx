import styles from './dangky.module.scss'
import Image from 'next/image'
import bannerlock from '../../public/banner-lock.webp'
import bannerclick from '../../public/banner-click.webp'
// import { Inter } from 'next/font/google'

// const inter = Inter({
//     subsets: ['Poppins'],
//     // display: 'swap',
// })
export default function DangKy() {
  return (
    <div className={styles.homeBannerRegister}>
        <div className={styles.boxBanner}>
            <div className={styles.bannerLeft}>
                <div className={styles.bannerInfo}>
                    <div className={styles.aosInit}>
                        <div className={styles.bannerRegister}>
                        Đăng ký
                        </div>
                        <div className={styles.bannerAcc}>
                        Tài khoản
                        </div>
                    </div>
                    <div className={styles.bannerFree}>FREE</div>
                </div>
                <div className={styles.bannerInfoBody}>
                    <div className={styles.bannerTextItem}>
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18971 18.0048L0.561523 8.97239L3.50526 6.20109L9.18971 11.7437C13.1688 3.53243 21.9797 1.06905 25.025 0.86377C16.5795 4.80518 11.1184 14.0018 9.18971 18.0048Z" fill="#FFA800"></path></svg>
                        <span>Xem thống kê quá trình luyện tập</span>
                    </div>
                    <div className={styles.bannerTextItem}>
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18971 18.0048L0.561523 8.97239L3.50526 6.20109L9.18971 11.7437C13.1688 3.53243 21.9797 1.06905 25.025 0.86377C16.5795 4.80518 11.1184 14.0018 9.18971 18.0048Z" fill="#FFA800"></path></svg>
                        <span>Xem giải thích miễn phí</span>
                    </div>
                    <div className={styles.bannerTextItem}>
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18971 18.0048L0.561523 8.97239L3.50526 6.20109L9.18971 11.7437C13.1688 3.53243 21.9797 1.06905 25.025 0.86377C16.5795 4.80518 11.1184 14.0018 9.18971 18.0048Z" fill="#FFA800"></path></svg>
                        <span>Đề xuất học tập khi làm xong đề kiểm tra</span>
                    </div>
                    <div className={styles.bannerTextItem}>
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18971 18.0048L0.561523 8.97239L3.50526 6.20109L9.18971 11.7437C13.1688 3.53243 21.9797 1.06905 25.025 0.86377C16.5795 4.80518 11.1184 14.0018 9.18971 18.0048Z" fill="#FFA800"></path></svg>
                        <span>Biết điểm mạnh, điểm yếu sau mỗi bài thi</span>
                    </div>
                    
                </div>
                <div className={styles.bannerInfoAction}>
                        <div className={styles.bannerZoom}>
                        Đăng ký ngay
                        <span><svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.38015 1.63755C6.06361 1.63755 4.14301 3.42114 3.79131 5.75427C3.72755 6.17718 3.38702 6.52598 2.95933 6.52598C2.53164 6.52598 2.18031 6.17777 2.22806 5.75275C2.59155 2.51746 5.20731 0.00805664 8.38015 0.00805664C11.553 0.00805664 14.1688 2.51746 14.5322 5.75275C14.58 6.17777 14.2287 6.52598 13.801 6.52598C13.3733 6.52598 13.0328 6.17718 12.969 5.75427C12.6173 3.42114 10.6967 1.63755 8.38015 1.63755ZM18.4887 11.2986C19.4179 11.5779 19.9779 12.2957 19.984 13.3053C19.9848 13.4504 19.9857 13.5955 19.9866 13.7406C19.9978 15.5556 20.009 17.3714 19.9546 19.1846C19.9045 20.8294 19.1379 22.168 17.8438 23.2051C16.7863 24.0526 15.5545 24.4474 14.1895 24.4498C13.6801 24.4506 13.171 24.4503 12.6618 24.45C12.4071 24.4499 12.1525 24.4498 11.8978 24.4498C10.5621 24.4492 9.41589 23.9934 8.47083 23.0705C6.03237 20.6889 3.59513 18.306 1.16218 15.919C0.327145 15.0996 0.506866 13.9387 1.54974 13.337C2.60606 12.7275 3.72778 12.7843 4.72053 13.5026C5.09592 13.7745 5.46941 14.0491 5.85644 14.3336C5.96461 14.4131 6.07384 14.4934 6.18447 14.5746C6.29336 14.6546 6.44683 14.5768 6.44683 14.4417V6.27334C6.44683 5.72427 6.58131 5.22127 6.95481 4.79183C7.50437 4.16023 8.36446 3.92457 9.20255 4.18774C9.96239 4.42638 10.567 5.1465 10.5926 5.94079C10.6167 6.66804 10.6145 7.39587 10.6123 8.12368C10.6114 8.43319 10.6105 8.74269 10.6116 9.05214C10.612 9.12556 10.6119 9.19899 10.6117 9.28242C10.6116 9.35083 10.6832 9.39591 10.7462 9.36914C11.283 9.14096 11.8189 9.0957 12.3678 9.29497C13.2703 9.62371 14.4372 10.0028 15.3595 10.2711C15.3839 10.2782 15.4084 10.2858 15.4329 10.2938C15.453 10.3004 15.473 10.3073 15.4927 10.3143C16.3924 10.6358 17.5739 11.0233 18.4887 11.2986Z" fill="#009D9D"></path></svg></span>
                        </div>
                </div>
                
            </div>
            <div className={styles.bannerRight}>
                <div className={styles.bannerClickImg}>
                    <Image src={bannerclick} width={376} height={371}   alt="bannerlogin" />

                </div>
                <div className={styles.bannerLockImg}>
                    <Image src={bannerlock} width={152} height={88} alt="lock"/>

                </div>
            </div>
        </div>
    </div>
  )
}
