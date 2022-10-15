import React from 'react';
import styles from './Header.module.css'
import resumeSvg from '../../assets/resume.svg'
function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
      <p className={styles.heading}>Our <span>Resume</span> Builder Makes it Easy!</p>
      <p className={styles.heading}><span>Resume</span> that Ensures you Stand Out.<br></br><span>It's Free!</span></p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  )
}
export default Header;
