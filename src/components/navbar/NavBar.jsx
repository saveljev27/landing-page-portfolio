import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.navbar_logo}>Landing Portfolio</h2>
      <ul>
        <li>
          <a href="/#skills">Skills</a>
        </li>
        <li>
          <a href="/#contact-form">Contact</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
      </ul>
      <a href="/#contact-form">
        <button className={styles.hire_me}>Hire me!</button>
      </a>
    </div>
  )
}

export default NavBar
