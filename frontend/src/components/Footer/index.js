import React from 'react'
import '../../scss/footer.scss'
import LogoFooter from '../../images/logo-white.svg'


const Footer = () =>  {
  return (
    <section className="footer">
    <div className="footer-bg">
      <div className="wrapper ">

        <div className="footer-upper-wrapper">
          <div className="footer-headers">
            <h2>Are there any other places?</h2>
            <h2>Let us know!</h2>
          </div>
          <div className="footer-form-wrapper">
            <form action="" className="footer-form">
              <label for="name">Name</label><br />
              <input type="text" /><br />

              <label for="email">Email</label><br />
              <input type="text" /><br />

              <label for="name">Message</label><br />
              <textarea type="text" rows="3"></textarea> <br />
              <input type="submit" className="submit" value="Send" />
            </form>

          </div>

        </div>

      </div>
    </div>

    <div className="wrapper">
      <div className="footer-lower-wrapper">
        <img src={LogoFooter} alt="footer logo" className="footer-logo" />

        <ul className="footer-list">
          <li>
            Terms
      </li>

          <li>
            Privacy
      </li>

          <li>
            Our mission
      </li>

          <li>
            Work with us
      </li>

          <li>
            Help
      </li>
        </ul>

      </div>
    </div>
  </section>
  )
}

export default Footer 
