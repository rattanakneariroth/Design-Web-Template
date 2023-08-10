import { useState } from 'react'
import styles from './dethi.module.scss'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';





export default function DenThi() {
    const [type, setType] = useState(0);
    const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={styles.categoryTest}>
        
        <div className={styles.dethi}>
           
            <Tabs TabIndicatorProps={{
                    style: {
                    backgroundColor: "#009E9D", 
                    height:'4px',
                    maxWidth:'100px',
                    transform:'translateX(55px)'      
                    }
                }} 
                value={value} 
                onChange={handleChange} 
                aria-label="disabled tabs example" 
                centered
            >
                <Tab style={{minWidth:'220px', fontWeight: '700', fontSize: '25px', color: '#009E9D'  }}  wrapped sx={{ textTransform: 'capitalize', m: 1 }} onClick={() => setType(0)} label="Đề thi ĐGNL" />

                <Tab style={{ minWidth:'220px', fontWeight: '700', fontSize: '25px', color: '#009E9D'}}  wrapped sx={{ textTransform: 'capitalize', m: 1 }} onClick={() => setType(1)} label="Luyện thi THPT" />
            </Tabs>
            
            { type === 0 && 
            <>
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
                    <div className={styles.boxItem}>
                        <div className={styles.boxItemContent}>
                        Đề Thi ĐGNL ĐHQG Hồ Chí Minh
                        </div>
                    </div>
                </a>
                
                <a href="#">
                    <div className={styles.boxItem}>
                        <div className={styles.boxItemContent}>
                        Đề thi ĐGNL ĐHSP Hà Nội
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className={styles.boxItem}>
                        <div className={styles.boxItemContent}>
                        Đề Thi ĐGTD Bách Khoa
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className={styles.boxItem}>
                        <div className={styles.boxItemContent}> 
                        Đề Thi ĐGNL Bộ Công An
                        </div>
                    </div>
                </a>
            </div>
            </>
            }
            {type === 1 &&
            <>
            <div data-aos="zoom-in" className={styles.categoryTestDes}>
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
            </>}
        </div>
    </div>
  )
}
