import styles from './luyentap.module.scss'
import Image from 'next/image'
import lop6 from '../../public/lop-6.webp'
import lop7 from '../../public/lop-7.webp'
import lop8 from '../../public/lop-8.webp'
import lop9 from '../../public/lop-9.webp'
import lop10 from '../../public/lop-10.webp'
import lop11 from '../../public/lop-11.webp'
import lop12 from '../../public/lop-12.webp'

import { Button } from '@material-ui/core'
import '@fontsource/roboto';




export default function LuyenTap() {
  return (
    <div className={styles.categaryCourse}>
        
            <div className={styles.titleCategory}>
                <h1 className={styles.title_h1}>
                Luyện tập trắc nghiệm online tại Học Thông Minh
                </h1>
                <div className={styles.summary}>
                    <p>
                        <span >
                        Làm trắc nghiệm online các môn Toán, Lý, Hóa, Sinh, Sử, Địa, GDCD, Tiếng Anh, Văn với các bài luyện tập theo chương trình học và đề thi học kì, giữa kì, ... có đáp án, lời giải chi tiết. 
                        </span>
                    </p>
                </div>
            </div>
            <div className={styles.blockCategory}>
                
                    <div className={styles.itemTitle}>Khối THCS</div>
                        
                            <div className={styles.courseItem}>
                                    <div data-aos="zoom-in" className={`${styles["thcs"]} ${styles["thcs1"]}`}>
                                        <a href="#">
                                            <div  className={styles.courseItemImg}>
                                                <Image src={lop6}  alt="lop6" width={0} height={0}  style={{ width: '100%', height:'auto'}}/>

                                            </div>
                                            <div className={styles.courseItemBody}>
                                                Tổng hợp tài liệu các môn Toán, Văn, Tiếng Anh, Lịch Sử,... đầy đủ và chi tiết nhất theo chương trình học lớp 6 và các đề thi học lỳ 1, học kỳ 2 kèm theo lời giải chi tiết.
                                            </div>
                                            <div className={styles.courseItemButton}>
                                            <Button className={styles.button1} variant="outlined">Luyện ngay<svg  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15"><g><path  d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon className={styles.svg1} points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg></Button>
                                            </div>
                                        </a>
                                    </div>
                                    <div data-aos="zoom-in"  className={`${styles["thcs"]} ${styles["thcs2"]}`}>
                                        <a href="#">
                                            <div className={styles.courseItemImg}>
                                            <Image src={lop7}  alt="lop7" width={0} height={0}  style={{ width: '100%', height:'auto'}}/>

                                            </div>
                                            <div className={styles.courseItemBody}>
                                                Tổng hợp tài liệu các môn Toán, Văn, Tiếng Anh, Lịch Sử,... đầy đủ và chi tiết nhất theo chương trình học lớp 6 và các đề thi học lỳ 1, học kỳ 2 kèm theo lời giải chi tiết.
                                            </div>
                                            <div className={styles.courseItemButton}>
                                            <Button className={styles.button2} variant="outlined">Luyện ngay<svg  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15"><g><path  d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon className={styles.svg2} points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg></Button>
                                            </div>
                                        </a>
                                    </div>
                                    <div data-aos="zoom-in" className={`${styles["thcs"]} ${styles["thcs3"]}`}>
                                        <a href="#">
                                            <div className={styles.courseItemImg}>
                                            <Image src={lop8}  alt="lop8" width={0} height={0}  style={{ width: '100%', height:'auto'}}/>

                                            </div>
                                            <div className={styles.courseItemBody}>
                                                Tổng hợp tài liệu các môn Toán, Văn, Tiếng Anh, Lịch Sử,... đầy đủ và chi tiết nhất theo chương trình học lớp 6 và các đề thi học lỳ 1, học kỳ 2 kèm theo lời giải chi tiết.
                                            </div>
                                            <div className={styles.courseItemButton}>
                                            <Button className={styles.button3} variant="outlined">Luyện ngay<svg  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon className={styles.svg3} points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg></Button>
                                            </div>
                                        </a>
                                    </div>
                                    <div data-aos="zoom-in" className={`${styles["thcs"]} ${styles["thcs4"]}`}>
                                        <a href="#">
                                            <div className={styles.courseItemImg}>
                                            <Image src={lop9}  alt="lop9" width={0} height={0}  style={{ width: '100%', height:'auto'}}/>

                                            </div>
                                            <div className={styles.courseItemBody}>
                                                Tổng hợp tài liệu các môn Toán, Văn, Tiếng Anh, Lịch Sử,... đầy đủ và chi tiết nhất theo chương trình học lớp 6 và các đề thi học lỳ 1, học kỳ 2 kèm theo lời giải chi tiết.
                                            </div>
                                            <div className={styles.courseItemButton}>
                                            <Button className={styles.button4} variant="outlined">Luyện ngay<svg  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon className={styles.svg4} points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg></Button>
                                            </div>
                                        </a>
                                    </div>
                            </div>
                    
                
                
                <div className={styles.itemTitle}>Khối THPT</div>
                        
                            <div className={styles.courseBody}>
                                    <div data-aos="zoom-in" className={styles.thcs}>
                                        <a href="#">
                                            <div className={styles.courseItemImg}>
                                                <Image src={lop10}  alt="lop6" width={0} height={0}  style={{ width: '100%', height:'auto'}}/>

                                            </div>
                                            <div className={styles.courseItemBody}>
                                                Tổng hợp tài liệu các môn Toán, Văn, Tiếng Anh, Lịch Sử,... đầy đủ và chi tiết nhất theo chương trình học lớp 6 và các đề thi học lỳ 1, học kỳ 2 kèm theo lời giải chi tiết.
                                            </div>
                                            <div className={styles.courseItemButton}>
                                            <Button className={styles.button5} variant="outlined">Luyện ngay<svg  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15"><g><path  d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon className={styles.svg5} points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg></Button>
                                            </div>
                                        </a>
                                    </div>
                                    <div data-aos="zoom-in" className={styles.thcs}>
                                        <a href="#">
                                            <div className={styles.courseItemImg}>
                                            <Image src={lop11}  alt="lop7" width={0} height={0}  style={{ width: '100%', height:'auto'}}/>

                                            </div>
                                            <div className={styles.courseItemBody}>
                                                Tổng hợp tài liệu các môn Toán, Văn, Tiếng Anh, Lịch Sử,... đầy đủ và chi tiết nhất theo chương trình học lớp 6 và các đề thi học lỳ 1, học kỳ 2 kèm theo lời giải chi tiết.
                                            </div>
                                            <div className={styles.courseItemButton}>
                                            <Button className={styles.button6} variant="outlined">Luyện ngay<svg  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15"><g><path  d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon className={styles.svg6} points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg></Button>
                                            </div>
                                        </a>
                                    </div>
                                    <div data-aos="zoom-in" className={styles.thcs}>
                                        <a href="#">
                                            <div className={styles.courseItemImg}>
                                            <Image src={lop12}  alt="lop8" width={0} height={0}  style={{ width: '100%', height:'auto'}}/>

                                            </div>
                                            <div className={styles.courseItemBody}>
                                                Tổng hợp tài liệu các môn Toán, Văn, Tiếng Anh, Lịch Sử,... đầy đủ và chi tiết nhất theo chương trình học lớp 6 và các đề thi học lỳ 1, học kỳ 2 kèm theo lời giải chi tiết.
                                            </div>
                                            <div className={styles.courseItemButton}>
                                            <Button className={styles.button7} variant="outlined">Luyện ngay<svg  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15"><g><path  d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon className={styles.svg7} points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg></Button>
                                            </div>
                                        </a>
                                    </div>
                                    
                            </div>
                    
                </div>
                

            </div>
            
        
    
  )
}
