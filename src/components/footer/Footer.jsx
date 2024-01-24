import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <div className={styles.start}>
        <h3>Start a project</h3>
        <p>
          Intersted in working together? We should queue up a chat. I'll buy the
          coffee
        </p>
        <button>Let's do This!</button>
      </div>
      <div className={styles.cols}>
        <div className={styles.about_col}>
          <h3>Olegs Saveljevs</h3>
          <p>Fullstack Developer</p>
        </div>
        <div className={styles.links_col}>
          <h4>Useful Links</h4>
          <a href="#">Home</a>
          <a href="#">Skills</a>
          <a href="#">Porfolio</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </div>
        <div className={styles.links_col}>
          <h4>Social Media</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">GitHub</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
        </div>
        <div className={styles.news_col}>
          <h4>NewsLetter</h4>
          <p>Enter your email and get notified about news, of</p>
          <form action="">
            <input type="email" maxlenght="32" placeholder="Enter your email" />
            <button>
              <i className="uil uil-envelope"></i>
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
export default Footer
