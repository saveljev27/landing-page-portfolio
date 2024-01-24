import './Contact.css'

function Contact() {
  return (
    <div className="container">
      <div id="contact-form" className="contact-form">
        <div className="form-section">
          <h2>Hi, friend!</h2>
          <p>Welcome to our Email Sender form</p>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="to"
                id="to"
                required
                autoComplete="off"
                placeholder="example@email.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                id="subject"
                required
                autoComplete="off"
                placeholder="Collaboration Request"
              />
            </div>
            <button className="send__button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
