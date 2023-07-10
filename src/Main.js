import React from "react";
import { AnimatedSlider } from "./components/AnimatedSlider";
// import CloudDancer from "./fonts/CloudDancer.otf";

function Main() {
  return (
    <main>
      <section>
        <div className="menu-options" id="home">
          <div className="menu-options" id="home-top">
            <h1 className="font-face">Bekbolot Bekmamatov</h1>
            <h3 className="font-face">Web Developer</h3>
          </div>
          <div className="menu-options" id="home-bottom">
            <div id="scroll-message">Scroll to explore</div>
            <AnimatedSlider />
          </div>
        </div>
      </section>
      <section>
        <div className="menu-options" id="about-me">
          <div className="text-block text-1">
            <h2>About me</h2>
            <img
              class="author-image"
              src="images/bbekmama-circle.png"
              alt="Bek"
            />
            <h3>
              I am a front end developer who is looking for new opportunities
              and challenges. Please feel free to check my projects and contact
              me anytime! :)
            </h3>
          </div>
        </div>
      </section>
      <section>
        <div className="menu-options" id="projects">
          <div className="text-block text-2">
            <h2>Projects</h2>
            <div className="project-container">
              <div className="project-block">
                <h3>What I've learned today</h3>
                <p>
                  This project is about sharing new random facts with people.
                  You can find many interesting information about different
                  topics. If you like, you are able to add your fact with
                  credible source. Other people can provide their feedback
                  regarding the truthfulness of your fact. Try it yourself and
                  become smarter!
                </p>
                <a
                  href="https://whatilearntoday.netlify.app/"
                  target="blank"
                  className="project-link"
                >
                  <img
                    className="project-image"
                    src="images/website-1.png"
                    // href={}
                    alt="website"
                    rel="noopener noreferrer"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ul id="horizontal">
          <li>
            <div>
              <img
                className="block-image"
                src="images/html-5.png"
                alt="Bek"
              ></img>
            </div>
          </li>
          <li>
            <div>
              <img
                className="block-image"
                src="images/css-3.png"
                alt="Bek"
              ></img>
            </div>
          </li>
          <li>
            <div>
              <img className="block-image" src="images/js.png" alt="Bek"></img>
            </div>
          </li>
          <li>
            <div>
              <img
                className="block-image"
                src="images/typescript.png"
                alt="Bek"
              ></img>
            </div>
          </li>
          <li>
            <div>
              <img
                className="block-image"
                src="images/node-js.png"
                alt="Bek"
              ></img>
            </div>
          </li>
          <li>
            <div>
              <img
                className="block-image"
                src="images/mysql.png"
                alt="Bek"
              ></img>
            </div>
          </li>
          <li>
            <div>
              <img
                className="block-image"
                src="images/postgre.png"
                alt="Bek"
              ></img>
            </div>
          </li>
          <li>
            <div>
              <img
                className="block-image"
                src="images/java.png"
                alt="Bek"
              ></img>
            </div>
          </li>
          <li>
            <div>
              <img
                className="block-image"
                src="images/atom.png"
                alt="Bek"
              ></img>
            </div>
          </li>
        </ul>
      </section>
      {/* <section>
        <div class="scroll">
          <div class="m-scroll">
            <span>
              <img
                className="block-image"
                src="images/html-5.png"
                alt="Bek"
              ></img>
            </span>
            <span>
              <img
                className="block-image"
                src="images/css-3.png"
                alt="Bek"
              ></img>
            </span>
            <span>
              <img className="block-image" src="images/js.png" alt="Bek"></img>
            </span>
            <span>
              <img
                className="block-image"
                src="images/typescript.png"
                alt="Bek"
              ></img>
            </span>
            <span>
              <img
                className="block-image"
                src="images/node-js.png"
                alt="Bek"
              ></img>
            </span>
            <span>
              <img
                className="block-image"
                src="images/mysql.png"
                alt="Bek"
              ></img>
            </span>
            <span>
              <img
                className="block-image"
                src="images/postgre.png"
                alt="Bek"
              ></img>
            </span>
            <span>
              <img
                className="block-image"
                src="images/java.png"
                alt="Bek"
              ></img>
            </span>
            <span>
              <img
                className="block-image"
                src="images/atom.png"
                alt="Bek"
              ></img>
            </span>
          </div>
        </div>
      </section> */}

      <section>
        <div className="menu-options" id="services">
          <div className="text-block text-3">
            <h2>Services</h2>
            <div className="block-container">
              <div className="blocks">
                <img
                  className="block-image"
                  src="images/html-5.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="blocks">
                <img
                  className="block-image"
                  src="images/css-3.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="blocks">
                <img
                  className="block-image"
                  src="images/js.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="blocks">
                <img
                  className="block-image"
                  src="images/typescript.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="blocks">
                <img
                  className="block-image"
                  src="images/node-js.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="blocks">
                <img
                  className="block-image"
                  src="images/mysql.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="blocks">
                <img
                  className="block-image"
                  src="images/postgre.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="blocks">
                <img
                  className="block-image"
                  src="images/java.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="blocks">
                <img
                  className="block-image"
                  src="images/atom.png"
                  alt="Bek"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="menu-options" id="contact-me">
          <div className="text-block text-4">
            <h2>Contact me</h2>
            <div className="contact-form">
              <div className="contact-block">
                <img
                  className="contact-image"
                  src="images/contact-icons/linkedin.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="contact-block">
                <img
                  className="contact-image"
                  src="images/contact-icons/facebook.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="contact-block">
                <img
                  className="contact-image"
                  src="images/contact-icons/twitter.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="contact-block">
                <img
                  className="contact-image"
                  src="images/contact-icons/whatsapp.png"
                  alt="Bek"
                ></img>
              </div>
              <div className="contact-block">
                <img
                  className="contact-image"
                  src="images/contact-icons/telegram.png"
                  alt="Bek"
                ></img>
              </div>
            </div>
            <div id="git-block">
              <h2>Let's connect</h2>
              <a href="mailto:bbekmamatov1991@gmail.com">Get in touch</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
