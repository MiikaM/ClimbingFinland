import React from 'react'
import '../../scss/user-page.scss'
import NavLogo from '../../images/logo-white-header.svg'
import LogoFooter from '../../images/logo-white.svg'
import Person1 from '../../images/profile_testit/colton-sturgeon-odKeTFsBDgE-unsplash.jpg'
import Person2 from '../../images/profile_testit/chad-madden-8mCMQSq41gQ-unsplash.jpg'
import NavHeader from '../NavHeader'
import Footer from '../Footer'
import MailSVG from '../../images/mail.svg'



const UserPage = () => {
  return (
    <div>
      <NavHeader />

      <section className="hero-wrapper">
        <div className="wrapper">
          <div className="hero-content">
            <img src={Person1} alt="" />
            <div className="user-text">
              <h2>John Doe</h2>

              <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iusto dolorem non alias
              consequuntur saepe
              reprehenderit nesciunt repellat dolore obcaecati, error, sequi deserunt reiciendis voluptatum quisquam
              facilis
              nemo itaque incidunt.
          </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper">
          <div className="content-wrapper">
            <div className="info">
              
              <div className="card">
                <h2>Info</h2>
                <ul className="info-list-user">
                  <li>
                    <img src={MailSVG} alt="" />
                    <p className="info-list-item"> boulderpaja@gmail.com</p>
                  </li>
                  <li>
                    <p >
                      Age
                  </p>
                    <p className="info-list-item">25</p>
                  </li>

                  <li>
                    <p>Likes</p> <br />
                    <ul className="likes-user">
                      <li className="tag-item first">
                        <p>
                          Boulder
</p>
                      </li>

                      <li className="tag-item second">
                        <p>
                          Lead
</p>
                      </li>

                      <li className="tag-item third">
                        <p>
                          Kuntosali
</p>
                      </li>

                      <li className="tag-item fourth">
                        <p>
                          Kuntosali
</p>
                      </li>
                      
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="comments-wrapper">

              <h2>Updates</h2>

              <ul className="comment-list-wrapper">
                <li className='card'>
                  <div className="comment">
                    <div className="comment-meta">
                      <img src={Person1} alt=""
                        className="comment-avatar" />
                    </div>
                    <div className="comment-meta-meta">
                      <strong>John Doe</strong>
                      <p className="timestamp">23-05-2020</p>
                    </div>

                    <div className="comment-body">
                      <blockquote>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit explicabo adipisci ad,
                        veniam
                        ducimus
                        perspiciatis impedit porro voluptates, dolorem itaque. Quis, harum? Minus debitis ratione
                        similique,
                        eum
                        qui
                        velit?
                  </blockquote>
                    </div>

                  </div>
                </li>

                <li className='card'>
                  <div className="comment">
                    <div className="comment-meta">
                      <img src={Person1} alt="" className="comment-avatar" />
                    </div>
                    <div className="comment-meta-meta">
                      <strong>John Doe</strong>
                      <p className="timestamp">23-05-2020</p>
                    </div>

                    <div className="comment-body">
                      <blockquote>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit explicabo adipisci ad,
                        veniam
                        ducimus
                        perspiciatis impedit porro voluptates, dolorem itaque. Quis, harum? Minus debitis ratione
                        similique,
                        eum
                        qui
                        velit?
                  </blockquote>
                    </div>
                  </div>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default UserPage
