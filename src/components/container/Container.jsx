function Container() {
  return (
    <>
      <div className="intro">
        <h4>
          Hi, My name <span>Olegs Saveljevs</span>
        </h4>
        <p className="intro_title">I am FullStack Web Developer</p>
        <p className="intro_subtitle">
          I'm Design And Code Beautifully Simple Things And I Love What I Doing!
        </p>
        <i className="uil uil-processor"></i>
      </div>

      <div className="quarantee">
        <div className="item">
          <div className="icon">
            <i className="uil uil-shield-check"></i>
          </div>
          <div className="info">
            <h3>+5</h3>
            <p>Years Of Experiences</p>
          </div>
          <i className="uil uil-angle-right"></i>
        </div>
        <div className="item">
          <div className="icon">
            <i className="uil uil-check-circle"></i>
          </div>
          <div className="info">
            <h3>+100</h3>
            <p>Completed Projects</p>
          </div>
          <i className="uil uil-angle-right"></i>
        </div>
        <div className="item">
          <div className="icon">
            <i className="uil uil-smile-beam"></i>
          </div>
          <div className="info">
            <h3>+50</h3>
            <p>Happy Clients</p>
          </div>
          <i class="uil uil-angle-right"></i>
        </div>
      </div>
      <div id="about" className="separator">
        <h5>Who I Am</h5>
      </div>
      <div className="who">
        <div id="about" className="about">
          <img src={require('../../img/avatar.png')} alt="avatar" />
          <div className="info">
            <h3>About Me</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div id="skills" className="separator">
        <h5>My Skills</h5>
      </div>
      <div className="skills">
        <div className="left">
          <div className="info">
            <h3>What My Programming Skills Included?</h3>
            <p>
              I develop simple, intuitive and responsive user interface that
              helps users get things done with less effort and time with those
              techologies.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <i className="bx bxl-html5"></i>
          </div>
          <div className="item">
            <i className="bx bxl-css3"></i>
          </div>
          <div className="item">
            <i className="bx bxl-php"></i>
          </div>
          <div className="item">
            <i className="bx bxl-javascript"></i>
          </div>
          <div className="item">
            <i className="bx bxl-nodejs"></i>
          </div>
          <div className="item">
            <i className="bx bxl-react"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Container
