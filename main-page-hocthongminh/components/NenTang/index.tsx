import styles from './nentang.module.scss'
export default function NenTang() {
  return (
    <div className={styles.homeBase}>
        <div>
            <div className={styles.homeBaseTitle}>
            Nền tảng Học Thông Minh có gì?
            </div>
            <div className={styles.homeBaseBody}>
                <div className={styles.homeBaseItem}>
                    <div className={styles.number}>
                        <span>
                            100
                        </span>
                        K+
                    </div>
                    <div className={styles.text}>Học Viên</div>
                </div>
                <div className={`${styles["homeBaseItem"]} ${styles["middle"]}`}>
                    <div className={styles.number}>
                        <span>
                            150
                        </span>
                        K+
                    </div>
                    <div className={styles.text}>Câu hỏi trắc nghiệm</div>
                </div>
                <div className={styles.homeBaseItem}>
                    <div className={styles.number}>
                        <span>
                            3000
                        </span>
                        +
                    </div>
                    <div className={styles.text}>Đề luyện thi</div>
                </div>
            </div>
        </div>
    </div>
  )
}
