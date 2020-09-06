import React from 'react'
import '../../scss/user-page.scss'
import NavLogo from '../../images/logo-white-header.svg'
import LogoFooter from '../../images/logo-white.svg'
import Person1 from '../../images/profile_testit/colton-sturgeon-odKeTFsBDgE-unsplash.jpg'
import Person2 from '../../images/profile_testit/chad-madden-8mCMQSq41gQ-unsplash.jpg'



const UserPage = () => {
  return (
    <div>
      <section class="nav-header">
    <div class="wrapper">
      <div class="nav-wrapper">
        <div class="search">

          <img src={NavLogo} alt="" class="header-logo" />
          <img src="./images/search.svg" class="search-icon" alt="search-icon" />
          <input type="text" class='search-bar' placeholder="Search..." />
        </div>

        <nav>
          <ul>
            <li>Favourites</li>
            <li><a href="logIn.html">Log in</a></li>
          </ul>
        </nav>

      </div>
    </div>

  </section>

  <section class="hero-wrapper">
    <div class="wrapper">
      <div class="hero-content">
        <img src={Person1} alt="" />
        <div class="user-text">
          <h2>John Doe</h2>

          <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iusto dolorem non alias
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
    <div class="wrapper">
      <div class="content-wrapper">
        <div class="info">
          <div class="card">
            <h2>Info</h2>
            <ul class="info-list">
              <li>
                <img src="./images/mail.svg" alt="" />
                <p class="info-list-item"> boulderpaja@gmail.com</p>
              </li>
              <li>
                <p class="info-list-item">
                  Age
                </p>
                <p>25</p>
              </li>

              <li class="likes">
                Likes

              <li class="tag-item first">
                <p>
                  Boulder
                </p>
              </li>

              <li class="tag-item second">
                <p>
                  Lead
                </p>
              </li>

              <li class="tag-item third">
                <p>
                  Kuntosali
                </p>
              </li>

              </li>
            </ul>
          </div>
        </div>

        <div class="comments-wrapper">

          <h2>Updates</h2>

          <ul class="comment-list-wrapper">
            <li class='card'>
              <div class="comment">
                <div class="comment-meta">
                  <img src={Person1} alt=""
                    class="comment-avatar" />
                </div>
                <div class="comment-meta-meta">
                  <strong>John Doe</strong>
                  <p class="timestamp">23-05-2020</p>
                </div>

                <div class="comment-body">
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

            <li class='card'>
              <div class="comment">
                <div class="comment-meta">
                  <img src={Person1} alt="" class="comment-avatar" />
                </div>
                <div class="comment-meta-meta">
                  <strong>John Doe</strong>
                  <p class="timestamp">23-05-2020</p>
                </div>

                <div class="comment-body">
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

  <section class="footer">
    <div class="footer-bg">
      <div class="wrapper ">

        <div class="footer-upper-wrapper">
          <div class="footer-headers">
            <h2>Are there any other places?</h2>
            <h2>Let us know!</h2>
          </div>
          <div class="footer-form-wrapper">
            <form action="" class="footer-form">
              <label for="name">Name</label><br />
              <input type="text" /><br />

              <label for="email">Email</label><br />
              <input type="text" /><br />

              <label for="name">Message</label><br />
              <textarea type="text" rows="3"></textarea> <br />
              <input type="submit" class="submit" value="Send" />
            </form>

          </div>

        </div>

      </div>
    </div>

    <div class="wrapper">
      <div class="footer-lower-wrapper">
        <img src={LogoFooter} alt="footer logo" class="footer-logo" />

        <ul class="footer-list">
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
    </div>
  )
}

export default UserPage
