import styles from './deth2.module.scss'
export default function DeThi2() {
  return (
    <div className={styles.categoryTest}>
        <div className={styles.categoryTest2}>
            <div className={styles.categoryTestHeader}>
                <div className={styles.categoryTestHeader2}>
                    <div className={styles.tabFlexContainer}>
                        <ul data-aos="fade-down">
                            <li ><a href="#" className={`${styles["btn"]} ${styles["active"]}` }>Đề thi ĐGNL</a></li>
                            <li><a href="#" className={styles.btn}>Luyện thi THPT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.categoryTestDes}>
            Luyện thi THPT QG các môn Toán, Lý, Hóa, Sinh, Sử, Địa, Giáo Dục Công Dân, Tiếng Anh với đề thi chọn lọc từ các trường và những dạng bài thi bám sát với chương trình thi đại học.
            </div>
            <div className={styles.categoryTestBody}>
                <a href="#">
                    <div className={styles.boxItemContent}>
                        <div className={styles.boxItemContent}>
                        Tiếng Anh
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}>
                        Toán
                        </div>
                    </div>
                </a>
                
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}>
                        Vật Lý
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}>
                        Hóa Học
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}> 
                        Sinh Học
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}> 
                        Lịch Sử
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}> 
                        Địa Lý
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}> 
                        Ngữ Văn
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className='boxItem'>
                        <div className={styles.boxItemContent}> 
                        Giáo Dục Công Dân
                        </div>
                    </div>
                </a>

            </div>
        </div>
    </div>
  )
}
