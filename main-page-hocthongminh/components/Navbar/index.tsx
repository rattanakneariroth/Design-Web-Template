import React, { useState, useEffect } from 'react';
import styles from './navbar.module.scss'

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return <div className={`${styles.navbar} ${styles[stickyClass]}`}>
     <nav className={styles.navbar}>
            <a href="#">Luyện Thi THPT QG</a>
            <a href="#">THCS<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill='white' d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></a>
            <a href="#">THPT<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill='white' d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></a>
            <a href="#">Đề thi ĐGNL</a>
            <a href="#">Tài liệu</a>
            <a href="#">Kiến thức</a>

        </nav>
  </div>;
}
