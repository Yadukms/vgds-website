import "./Footer.css";
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LOGO + SOCIAL */}
        <div className="footer-brand">
          <img
            src="/footer/logo.png"
            alt="VGDS Global"
            className="footer-logo"
          />

         <div className="footer-social">
  <FaXTwitter />
  <FaInstagram />
  <FaYoutube />
  <FaLinkedinIn />
</div>

        </div>

        {/* OUR SERVICES */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Presentation Design</li>
            <li>Graphic Design</li>
            <li>Content Services</li>
            <li>Digital & Social Media Marketing</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* OUR SOLUTIONS */}
        <div className="footer-col">
          <h4>Our Solutions</h4>
          <ul>
            <li>Presentation Experts on Demand</li>
            <li>Overnight Presentation</li>
            <li>Dedicated Design Team Subscription</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <p>info@vgdsglobal.com</p>

          <p className="footer-country">India</p>
          <p>+91 73068 57192</p>

          <p className="footer-country">USA</p>
          <p>+1 929 500 0711</p>
          <p>+1 929 433 1332</p>

          <p className="footer-country">Australia</p>
          <p>+61 428 838 740</p>
        </div>

        {/* ADDRESS */}
        <div className="footer-col">
          <h4>Our Address</h4>

          <p>
            VGDS Global LLP,<br />
            3rd Floor, Blue Mount Tower,<br />
            Nilampathinji Mughal – Infopark Road,<br />
            Kusumagiri PO, Kakkanad,<br />
            Cochin, Kerala, India, 682030
          </p>

          <p className="footer-address">
            VGDS Global Australia,<br />
            46 Cowie Road, Carseldine,<br />
            Brisbane, Queensland, Australia
          </p>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>2025 © VGDS</p>
        <p>Powered by Ryzenforge Enterprises LLP</p>
      </div>
    </footer>
  );
}
