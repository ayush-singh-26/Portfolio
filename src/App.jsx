import './index.css';
import pngwingImage2 from './pngwing2.com.png';  // Importing the image
import pngwingImage from './pngwing.com.png';  // Importing the image
import htmlLogo from './html5-logo-31820.png';
import cssLogo from './html5-logo-31822.png';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function App() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Web Developer', 'Web Designer', 'Video Editor'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="nav-left">Ayush's Portfolio</div>
          <div className="nav-right"></div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="first-section">
          <div className="left-section">
            <h1>Hi, My name is <span className="highlight">Ayush</span></h1>
            <h1>and I am a passionate</h1>
            <span id="element" ref={typedElement}></span> {/* Typed.js will target this span */}
            <div className="button-group">
              <button className="btn">Download Resume</button>
              <button className="btn">Visit GitHub</button>
            </div>
          </div>
          <div className="right-section">
            <img src={pngwingImage2} alt="Ayush's portrait" />
          </div>
        </section>

        <hr />

        <section className="second-section">
          <span className="gray-text">What I have done so far</span>
          <h1>Work Experience</h1>
          <div className="experience-box">
            <div className="experience-item">
              <img className="experience-image" src={htmlLogo} alt="HTML5 logo" />
              <div className="experience-title">HTML Developer (2019-2021)</div>
              <div className="experience-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quos quod exercitationem voluptates doloremque fugit dolores nostrum vel soluta eius.</p>
              </div>
            </div>
            <div className="experience-item">
              <img className="experience-image" src={cssLogo} alt="CSS logo" />
              <div className="experience-title">CSS Developer (2019-2021)</div>
              <div className="experience-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quos quod exercitationem voluptates doloremque fugit dolores nostrum vel soluta eius.</p>
              </div>
            </div>
            <div className="experience-item">
              <img className="experience-image" src={pngwingImage} alt="JavaScript logo" />
              <div className="experience-title">JavaScript Developer (2021-23)</div>
              <div className="experience-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quos quod exercitationem voluptates doloremque fugit dolores nostrum vel soluta eius.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <div className="footer-section">
            <h3>Ayush's Developer Portfolio</h3>
          </div>
          <div className="footer-section">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
