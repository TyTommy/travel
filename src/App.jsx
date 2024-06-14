import "./index.css";
import Logo from "../src/images/Logo.png";
import Avatar from "../src/images/Avatar.png";
import Icon from "../src/images/Icon.png";
import Gift from "../src/images/giftIcon.png";
import Alert from "../src/images/alertIcon.png";
import Hero from "../src/images/HeroSharp.png";
import titleImg from "../src/images/TitleFrame.png";
import cardImg from "../src/images/img-1.png";
import AvatarMan from "../src/images/AvatarMan.png";
import cardImg2 from "../src/images/img-2.jpg";
import Avatar2 from "../src/images/Avatar2.png";
import PhInterface from "../src/images/img-3.png";
import FeaturedTit from "../src/images/Featured.png";
import Keyboard from "../src/images/Keyboard.png";
import Traveling from "../src/images/traveling.jpg";
import FoodVendor from "../src/images/foodvendor.jpg";
import Nature from "../src/images/Nature.jpg";

function App() {
  return (
    <div className="container">
      {/* upper Navbar */}
      <div>
        <div className="Navbar">
          <div>
            <a href="#">
              <img className="logo" src={Logo} alt="Logo" />
            </a>
          </div>
          {/* search bar and order button */}
          <div>
            <div className="group">
              <img className="personality" src={Avatar} />
              <p>Bruce Lee</p>
              <img className="Icon" src={Icon} />
              <div className="giftLogo">
                <img className="Gift" src={Gift} />
                <img src={Alert} />
              </div>
            </div>
          </div>
        </div>

        <div className="hero">
          <div>
            <img src={Hero} />
            <img className="titleImg" src={titleImg} />
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div className="Card_Container">
        <div className="cardTitle">
          <h2>Featured articles</h2>
        </div>
        <div className="line"></div>
        <div className="cards_Section">
          <div>
            <div className="card">
              <img src={cardImg} />
              <strong>10 beaches you must visit</strong>
              <div className="personality">
                <img src={AvatarMan} />
                <p>Farok Rastegar . 1 hour ago</p>
              </div>
              <div className="description">
                <span>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the…
                </span>
              </div>
            </div>

            <div className="card">
              <img src={cardImg2} />
              <strong>10 beaches you must visit</strong>
              <div className="personality">
                <img src={Avatar2} />
                <p>Farok Rastegar . 1 hour ago</p>
              </div>
              <div className="description">
                <span>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the…
                </span>
              </div>
            </div>

            <div className="card">
              <img src={PhInterface} />
              <strong>10 beaches you must visit</strong>
              <div className="personality">
                <img src={Avatar2} />
                <p>Farok Rastegar . 1 hour ago</p>
              </div>
              <div className="description">
                <span>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the…
                </span>
              </div>
            </div>
          </div>

          <div className="Cards2">
            <div className="card">
              <img src={PhInterface} />
              <strong>10 beaches you must visit</strong>
              <div className="personality">
                <img src={Avatar2} />
                <p>Farok Rastegar . 1 hour ago</p>
              </div>
              <div className="description">
                <span>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the…
                </span>
              </div>
            </div>

            <div className="card">
              <img src={cardImg} />
              <strong>10 beaches you must visit</strong>
              <div className="personality">
                <img src={AvatarMan} />
                <p>Farok Rastegar . 1 hour ago</p>
              </div>
              <div className="description">
                <span>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the…
                </span>
              </div>
            </div>

            <div className="card">
              <img src={cardImg2} />
              <strong>10 beaches you must visit</strong>
              <div className="personality">
                <img src={Avatar2} />
                <p>Farok Rastegar . 1 hour ago</p>
              </div>
              <div className="description">
                <span>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the…
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="FeaturedContainer">
          <div className="BlackSpace">
            <img className="child" src={FeaturedTit} />
            <img src={Keyboard} />
          </div>
        </div>
        <div className="cardTitle">
          <h2>Featured articles</h2>
        </div>
        <div className="line"></div>
      </div>

      <div className="Articles">
        <div className="Articles_Container">
          <img src={Traveling} />
          <div className="Articles_Title">
            <strong>Pathway to the Mediterranean</strong>
            <div className="Articles_Avatar">
              <img src={Avatar2} />
              <p>Farok Rastegar . 1 hour ago</p>
            </div>
            <span>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain a…
            </span>
          </div>
        </div>

        <div className="Articles_Container">
          <img src={FoodVendor} />
          <div className="Articles_Title">
            <strong>Pathway to the Mediterranean</strong>
            <div className="Articles_Avatar">
              <img src={Avatar2} />
              <p>Farok Rastegar . 1 hour ago</p>
            </div>
            <span>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain a…
            </span>
          </div>
        </div>

        <div className="Articles_Container">
          <img className="child" src={Nature} />
          <div className="Articles_Title">
            <strong>Pathway to the Mediterranean</strong>
            <div className="Articles_Avatar">
              <img src={Avatar2} />
              <p>Farok Rastegar . 1 hour ago</p>
            </div>
            <span>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain a…
            </span>
          </div>
        </div>

        <div className="Articles_Container">
          <img src={Traveling} />
          <div className="Articles_Title">
            <strong>Pathway to the Mediterranean</strong>
            <div className="Articles_Avatar">
              <img src={Avatar2} />
              <p>Farok Rastegar . 1 hour ago</p>
            </div>
            <span>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain a…
            </span>
          </div>
        </div>

        <div className="Articles_Container">
          <img src={FoodVendor} />
          <div className="Articles_Title">
            <strong>Pathway to the Mediterranean</strong>
            <div className="Articles_Avatar">
              <img src={Avatar2} />
              <p>Farok Rastegar . 1 hour ago</p>
            </div>
            <span>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain a…
            </span>
          </div>
        </div>

        <button className="Articles_btn">Load more</button>
      </div>

      <div className="inBox_container">
        <div className="bluePage">
          <h3>Incredible deals, right to your inbox!</h3>
          <div class="col-75">
            <select id="country" name="country">
              <option value="Placeholder">Placeholder</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
          <span>By joining you agree to our Terms and Conditions</span>
        </div>
      </div>

      <div className="footer_line"></div>

      <footer>
        <div className="footer_container">
          <div className="footer_info">
            <strong>First Column</strong>
            <p>Link One</p>
            <p>Link Two</p>
            <p>Link Three</p>
            <p>Link Four</p>
          </div>

          <div className="footer_info">
            <strong>First Column</strong>
            <p>Link One</p>
            <p>Link Two</p>
            <p>Link Three</p>
            <p>Link Four</p>
          </div>

          <div className="footer_info">
            <strong>First Column</strong>
            <p>Link One</p>
            <p>Link Two</p>
            <p>Link Three</p>
            <p>Link Four</p>
          </div>

          <div className="footer_info">
            <strong>First Column</strong>
            <p>Link One</p>
            <p>Link Two</p>
            <p>Link Three</p>
            <p>Link Four</p>
          </div>

            <div className="footer_Pls">
              <span>Never miss an update</span>
              <div class="col-75">
              <select id="country" name="country">
                <option value="Placeholder">Placeholder</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
            </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
