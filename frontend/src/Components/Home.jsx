import React from "react";
import { useUserContext } from "./UserContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "./images/logo.jpg";
import c1 from "./images/c1.jpg";
import c2 from "./images/html.png";
import c3 from "./images/sql.jpg";
import c4 from "./images/python.jpg";
import c5 from "./images/java.png";
import c6 from "./images/css.png";
import "./css/style.css";
import {
  faGraduationCap,
  faAward,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import Footer from "./header and footer/Footer";

function Home() {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");
  return (
    <div>
      <Navbar page={"home"} />
      <div>
        <section id="home">
          <h2>Enhance your future with MAPS Academy</h2>
          <p>
            {" "}
            MAPS Academy is a leading online learning platform that structures its courses into interactive modules and lessons. Each course includes engaging video lectures, comprehensive reading materials, and assessment quizzes to enhance the learning experience.
          </p>
          <div className="btn">
            <a className="blue" href="#">
              Learn More
            </a>
            <a className="yellow" href="#">
              Visit Courses
            </a>
          </div>
        </section>
        <section id="features">
          <h1>Unique Characteristics</h1>
          <p>Opportunity to grow and improve yourself</p>
          <div className="fea-base">
            <div className="fea-box">
              <FontAwesomeIcon icon={faGraduationCap} className="i" />
              <h3>Scholarship Facility</h3>
              <p>Originality is the essence of true scholarship. </p>
            </div>
            <div className="fea-box">
              <FontAwesomeIcon icon={faStar} className="i" />
              <h3>Valuable Courses</h3>
              <p>
                Online education is like a rising tide, it's going to lift all
                boats.{" "}
              </p>
            </div>
            <div className="fea-box">
              <FontAwesomeIcon icon={faAward} className="i" />
              <h3>Global Certification</h3>
              <p>
                A certificate without knowledge is like a gun without bullets in
                your hand.{" "}
              </p>
            </div>
          </div>
        </section>
        <section id="course">
          <h1>Our Popular Courses</h1>
          <p>10,000+ enrolled</p>
          <div className="course-box">
            {/* ... (Course content here) */}
            <div className="courses">
              <img src={c1} alt="" />
              <div className="details">
                <p>Updated 12/01/25</p>
                <h6>JavaScript Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.499</div>
            </div>
            <div className="courses">
              <img src={c2} alt="" />
              <div className="details">
                <p>Updated 15/01/25</p>
                <h6>HTML Foundation Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.299</div>
            </div>
            <div className="courses">
              <img src={c3} alt="" />
              <div className="details">
                <p>Updated 14/01/25</p>
                <h6>SQL Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.799</div>
            </div>
            <div className="courses">
              <img src={c4} alt="" />
              <div className="details">
                <p>Updated 18/01/25</p>
                <h6>Python Full Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.699</div>
            </div>
            <div className="courses">
              <img src={c5} alt="" />
              <div className="details">
                <p>Updated 12/02/25</p>
                <h6>Java Fundamentals</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.599</div>
            </div>
            <div className="courses">
              <img src={c6} alt="" />
              <div className="details">
                <p>Updated 12/02/25</p>
                <h6>CSS Full Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.999</div>
            </div>
          </div>
        </section>
        <section id="registration">
          <div className="reminder">
            <p>Get Online Courses for Free</p>
            <h1>Sign up to access it</h1>
            <div className="time">
              <div className="date">
                20
                <br /> Days
              </div>
              <div className="date">
                15
                <br /> Hours
              </div>
              <div className="date">
                07
                <br /> Minutes
              </div>
              <div className="date">
                29
                <br /> Seconds
              </div>
            </div>
          </div>
          {!authToken ? (
            <div className="form">
              <h3>Create Free Account NOW!</h3>
              <input type="text" placeholder="Name" name="" id="" />
              <input type="text" placeholder="Email" name="" id="" />
              <input type="password" placeholder="Password" name="" id="" />
              <input type="number" placeholder="Phone Number" name="" id="" />
              <div className="btn">
                <a className="yellow" href="#">
                  Submit Form
                </a>
              </div>
            </div>
          ) : (
            <></>
          )}
        </section>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
