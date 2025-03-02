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
            <a className="blue" href="#footer">
              Learn More
            </a>
            <a className="yellow" href="/courses">
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
                <h6>JavaScript Beginner Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.500</div>
            </div>
            <div className="courses">
              <img src={c2} alt="" />
              <div className="details">
                <p>Updated 15/01/25</p>
                <h6>HTML Complete Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.400</div>
            </div>
            <div className="courses">
              <img src={c3} alt="" />
              <div className="details">
                <p>Updated 14/01/25</p>
                <h6>SQL Beginner Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.600</div>
            </div>
            <div className="courses">
              <img src={c4} alt="" />
              <div className="details">
                <p>Updated 18/01/25</p>
                <h6>Python Master Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.800</div>
            </div>
            <div className="courses">
              <img src={c5} alt="" />
              <div className="details">
                <p>Updated 12/02/25</p>
                <h6>Java Essenstials</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.700</div>
            </div>
            <div className="courses">
              <img src={c6} alt="" />
              <div className="details">
                <p>Updated 12/02/25</p>
                <h6>CSS Complete Course</h6>
                <div className="star">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="i" />
                  ))}
                  <p>(239)</p>
                </div>
              </div>
              <div className="cost">Rs.450</div>
            </div>
          </div>
        </section>
        <section id="registration">
          <div className="reminder">
            <h1>Information Related to Problem Statement</h1>
            <br></br>
            <p>In today's world, students often need an engaging and interactive way to track their learning progress and assess their knowledge. Many existing online learning platforms lack effective tools to help students see how much they have learned, where they need improvement, and how they compare with others.
To solve this, we have developed a student-centric platform MAPS: Modular Advanced Platform for Students
 that makes learning fun, interactive, and engaging.</p>
            <div className="time">
            
            </div>
          </div>
          
        </section>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
