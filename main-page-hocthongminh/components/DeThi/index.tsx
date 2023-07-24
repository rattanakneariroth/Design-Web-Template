import styles from './dethi.module.scss'
export default function DenThi() {
  return (
    <div className={styles.categoryTest}>
        <div className={styles.dethi}>
            <ul data-aos="fade-down">
                <li ><a href="#" className={`${styles["btn"]} ${styles["active"]}` }>Đề thi ĐGNL</a></li>
                <li><a href="#" className={styles.btn}>Luyện thi THPT</a></li>
            </ul>
            
            <div data-aos="zoom-in" className={styles.categoryTestDes}>
            Tổng hợp mẫu các dạng đề thi đánh giá năng lực dưới dạng trắc nghiệm online của các trường với ngân hàng câu hỏi và đề thi lớn giúp bạn chuẩn bị tốt cho kì thi ĐGNL.
            </div>
            <div className={styles.categoryTestBody}>
                <a href="#">
                    <div className={styles.boxItem}>
                        <div className={styles.boxItemContent}>
                            Đề Thi ĐGNL ĐHQG Hà Nội
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}>
                        Đề Thi ĐGNL ĐHQG Hồ Chí Minh
                        </div>
                    </div>
                </a>
                
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}>
                        Đề thi ĐGNL ĐHSP Hà Nội
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}>
                        Đề Thi ĐGTD Bách Khoa
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}> 
                        Đề Thi ĐGNL Bộ Công An
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
