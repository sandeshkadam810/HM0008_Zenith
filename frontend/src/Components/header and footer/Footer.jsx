import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/style.css'

function Footer(){
  return(
  <section id='footer'>
     <footer>
  <div className="footer-col">
    <h3>About Us</h3>
    <p>We are a dedicated team passionate about providing quality education and skill development.</p>
    <ul>
      <li><strong>Sandesh Kadam</strong> - sandesh@example.com - +91 95297 72113</li>
      <li><strong>Manas Patil</strong> - manas@example.com - +91 99224 68220</li>
      <li><strong>Aditi Samargade</strong> - aditi@example.com - +91 70286 43572</li>
      <li><strong>Pooja Jadhavrao</strong> - pooja@example.com - +91 87675 26216</li>
    </ul>
  </div>

        <div className="copyright">
          
          <div className="pro-links">
            
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} className="i" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="i" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="i" /></a>
          </div>
        </div>
        </footer>
      </section>
  )
}
export default Footer;