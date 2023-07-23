import styles from './footer.module.scss'
import Image from 'next/image'
import Protectd from '../../public/dmca-badge-w150-5x1-01.png'
import Tiktok from '../../public/tiktok.webp'
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className={styles.itemGrid}>
          <div>
            <div className={styles.itemContact}>
              <Image src="https://hocthongminh.com/images/logo.svg" alt='logoFooter' width={100} height={100} style={{width: "200px", height:"65px" }}/>
            </div>
            <div className={styles.itemContact}>
              <svg  xmlns="http://www.w3.org/2000/svg" width={23} height={28} viewBox="0 0 23 28" fill="none"><path d="M0.5 11.361C0.5 5.81309 4.63381 1.43239 10.0617 0.784501C12.7886 0.463849 15.5473 1.09218 17.7956 2.54599C20.0439 3.99979 21.6192 6.17388 22.2117 8.64092C22.9219 11.5839 22.32 14.2858 20.4062 16.7467C17.6908 20.2445 14.9759 23.7423 12.2614 27.2401C11.7839 27.8555 11.2174 27.8581 10.7385 27.2401C8.00707 23.7206 5.27569 20.2025 2.5443 16.6856C1.19226 14.9575 0.532494 13.032 0.5 11.361ZM15.9502 10.8248C15.9502 8.61752 13.9568 6.73232 11.6073 6.73102C9.06431 6.73102 7.01295 8.56045 7.03555 10.817C7.03443 11.9034 7.50296 12.9458 8.33808 13.7147C9.1732 14.4837 10.3065 14.9162 11.4887 14.9172C12.6708 14.9183 13.805 14.4877 14.6417 13.7202C15.4784 12.9527 15.9491 11.9112 15.9502 10.8248Z" fill="#646E79"></path></svg>
              <span>Tầng 3, Lô NT KĐT mới Phùng Khoang, Phường Trung Văn, Quận Nam Từ Liêm, Hà Nội</span>

            </div>
            <div className={styles.itemContact}>
              <span>Cơ quan chủ quản: Công ty Cổ phần Đầu tư và Phát triển Koolsoft</span>
              
            </div>
            <div className={styles.itemContact}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none"><path d="M21.6341 1.42607C21.3077 1.72129 20.9942 1.99998 20.6796 2.28103L14.5816 7.7385C13.5161 8.69147 12.4511 9.64523 11.3867 10.5998C11.2854 10.6907 11.2232 10.6907 11.1219 10.5998C8.11908 7.90894 5.11475 5.22005 2.10893 2.53315L1.0604 1.59493C1.00162 1.54238 0.944518 1.48806 0.876221 1.42489C1.10288 1.16976 1.41313 1.01524 1.74393 0.992694C1.81055 0.986199 1.87773 0.989725 1.9449 0.989725C8.16704 0.989725 14.3895 0.989725 20.6124 0.989725C21.0049 0.986772 21.343 1.11373 21.6341 1.42607Z" fill="#646E79"></path><path d="M14.6207 9.09619L21.465 16.3137C21.2622 16.4828 21.014 16.58 20.7557 16.5913C20.5665 16.6019 20.3762 16.5954 20.1858 16.5954C14.0869 16.5954 7.9875 16.5954 1.88778 16.5954C1.58884 16.6032 1.29568 16.5076 1.0531 16.3232C3.33882 13.9148 5.61446 11.517 7.90297 9.10447C8.15601 9.32942 8.42808 9.57151 8.70015 9.813C9.41185 10.4503 10.1232 11.0876 10.8342 11.7248C11.1538 12.0112 11.3553 12.0112 11.6739 11.7248L14.5116 9.18594C14.5468 9.15642 14.5827 9.12808 14.6207 9.09619Z" fill="#646E79"></path><path d="M15.442 8.35645L22.0019 2.48804V15.2758L15.442 8.35645Z" fill="#646E79"></path><path d="M0.5 15.2979V2.4812L7.07724 8.36732L0.5 15.2979Z" fill="#646E79"></path></svg>
              <span>hotro.hocthongminh@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={styles.centerFooter}>
          <div className={styles.itemGrid1}>
            <div className={styles.titleFooterPage}>
            Về chúng tôi
            </div>
            <div className={styles.listContact}>
              <div>
                <a href="#">
                Giới thiệu
                </a>
              </div>
              <div>
                <a href="#">Liên hệ</a>
              </div>
            </div>
          </div>
          <div className={styles.itemGrid1}>
            <div className={styles.titleFooterPage}>Chính sách</div>
            <div className={styles.listContact}>
              <div>Điều khoản sử dụng</div>
              <div>Chính sách bảo mật</div>
            </div>
          </div>
          <div className={styles.itemGrid1}>
            <div className={styles.titleFooterPage}>Thông tin</div>
            <div className={styles.listContact}>
              <div>Chia sẻ kiến thức</div>
              <div>Tin tức</div>
              <div>Tính điểm xét tốt nghiệp</div>
              <div>Tính điểm xét học bạ</div>

            </div>
          </div>
        </div>
        <div className={styles.connectWithHtml}>
          <div className={styles.titleFooterPage}>
            Kết nối với 
            <br/>
            Hocthongminh
          </div>
          <div className={styles.iconContact}>
            <a href="#">
            <Image src="https://hocthongminh.com/images/facebook.svg" alt='logoFooter' width={30} height={33} />
            </a>
            <a href="#">
            <Image src="https://hocthongminh.com/images/social/youtube.svg" alt='logoFooter' width={30} height={30} />
            </a>
            <a href="#">
            <Image src="https://hocthongminh.com/images/social/twitter.svg" alt='logoFooter' width={30} height={30} />
            </a>
            <a href="#">
            <Image src="	https://hocthongminh.com/images/social/pinterest.svg" alt='logoFooter' width={30} height={30}/>
            </a>
            <a href="#">
            <Image src={Tiktok} alt='logoFooter' width={35} height={35}/>
            </a>
          </div>
          <a href="#">
          <Image src={Protectd} alt='logoFooter' width={150} height={30}/>

          </a>
        </div>
      </div>
    </div>
  )
}