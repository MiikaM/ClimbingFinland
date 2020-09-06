import React from 'react'
import ReactDOM from 'react-dom'
import '../../scss/homepage.scss'
 import LogoBlue from '../../images/logo-blue.svg'
 import LogoFooter from '../../images/logo-white.svg'
import Footer from '../Footer'

const HomePage = (params) => {

  return (
    <div>
      <section className="hero-wrapper">
        <div className="wrapper">
          <div className="header">
            <nav>
              <ul>
                <li>Favourites</li>
                <li><a href="logIn.html">Log in</a></li>
              </ul>
            </nav>
          </div>


          <div className="hero-content">

            <img src={LogoBlue} alt='Top logo' className='top-logo' />
            <p className="subtitle">
              Find the best climbing gym for you
        </p>
          </div>
        </div>
      </section>

      <section className="place-window-wrapper">
        <div className="wrapper ">
          <div className="search-container">
            <img src="../../images/search-blue.svg" alt="" className="search-icon" />
            <input type="text" className='search-bar' placeholder="Search..." />
          </div>

          <ul className="place-list">
            <li className="place-wrapper">
              <div className="place-card">
                <img src={"https://www.boulderkeskus.com/assets/navi_images/1280/1280_293.jpg"} alt="first place" className="place" />
                <div className="place-text-wrapper">
                  <h2 className="place-header">BoulderPaja</h2>
                  <blockquote className="place-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, id. Ducimus voluptatibus deleniti qui
                    repellendus explicabo, porro, ratione repudiandae esse unde quae nobis iste aspernatur velit cumque
                    beatae
                    eum eos!
              </blockquote>
                  <button className="readmore-button">Read more</button>
                </div>
              </div>


            </li>

            <li className="place-wrapper">
              <div className="place-card">
                <img src={"https://voema.net/wp-content/uploads/2018/09/2017_panorama1_www.jpg"} alt="second place" className="place" />
                <div className="place-text-wrapper">
                  <h2 className="place-header">Kiipeilyareena</h2>
                  <blockquote className="place-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, id. Ducimus voluptatibus deleniti qui
                    repellendus explicabo, porro, ratione repudiandae esse unde quae nobis iste aspernatur velit cumque
                    beatae
                    eum eos!
              </blockquote>
                  <button className="readmore-button">Read more</button>
                </div>
              </div>

            </li>

            <li className="place-wrapper">
              <div className="place-card">
                <img src={"https://kiipeilyareena.com/wp-content/uploads/2019/10/Salmisaari_Salmisaari_laatikko2.jpg"} alt="third place" className="place" />

                <div className="place-text-wrapper">
                  <h2 className="place-header">Bouldertehdas</h2>
                  <blockquote className="place-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, id. Ducimus voluptatibus deleniti qui
                    repellendus explicabo, porro, ratione repudiandae esse unde quae nobis iste aspernatur velit cumque
                    beatae
                    eum eos!
              </blockquote>
                  <button className="readmore-button">Read more</button>
                </div>
              </div>

            </li>

            <li className="place-wrapper">
              <div className="place-card">
                <img src={"https://kiipeilykeskus.com/wp-content/uploads/sites/5/2019/11/20190708-A7_03886-1920x960.jpg"} alt="fourth place" className="place" />
                <div className="place-text-wrapper">
                  <h2 className="place-header">Boulderkeskus</h2>
                  <blockquote className="place-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, id. Ducimus voluptatibus deleniti qui
                    repellendus explicabo, porro, ratione repudiandae esse unde quae nobis iste aspernatur velit cumque
                    beatae
                    eum eos!
              </blockquote>
                  <button className="readmore-button">Read more</button>
                </div>
              </div>

            </li>

            <li className="place-wrapper">
              <div className="place-card">
                <img src={"https://i.ytimg.com/vi/hSrd8sZeI2o/maxresdefault.jpg"} alt="fifth place" className="place" />
                <div className="place-text-wrapper">
                  <h2 className="place-header">VoEma</h2>
                  <blockquote className="place-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, id. Ducimus voluptatibus deleniti qui
                    repellendus explicabo, porro, ratione repudiandae esse unde quae nobis iste aspernatur velit cumque
                    beatae
                    eum eos!
              </blockquote>
                  <button className="readmore-button">Read more</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      
      <Footer />
    </div>
  )
}

export default HomePage
