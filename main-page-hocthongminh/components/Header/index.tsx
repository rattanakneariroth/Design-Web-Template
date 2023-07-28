import styles from './header.module.scss'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
       <div className={styles.top}>
            <a href="#" className={styles.logo}>
                <Image
                    src="https://hocthongminh.com/images/logo.svg"
                    alt="logo"
                    width={200}
                    height={45}
                />
            </a>
            <div className={styles.icon}>
                <button><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" ><path d="M0 0h24v24H0z" fill="none"/><path fill='#fff' d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></button>
            </div>
       </div>
        <nav className={styles.navbar}>
            <a href="#">Luyện Thi THPT QG</a>
            <a href="#">THCS<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill='white' d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></a>
            <a href="#">THPT<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill='white' d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></a>
            <a href="#">Đề thi ĐGNL</a>
            <a href="#">Tài liệu</a>
            <a href="#">Kiến thức</a>

        </nav>
    </header>
  )
}
