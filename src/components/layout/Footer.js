import { Link } from "react-router-dom";

import FacebookIcon from "../ui/icons/FacebookIcon";
import InstagramIcon from "../ui/icons/InstagramIcon";
import YouTubeIcon from "../ui/icons/YouTubeIcon";
import FooterLogo from "../../images/logo-vertical-white.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Link to="/">
            <img src={FooterLogo} alt="Footer logo" />
          </Link>
        </div>
        <div>
          <div>
            <p>Site Map</p>
            <menu>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Menu</Link>
              </li>
              <li>
                <Link to="/booking-page">Reservations</Link>
              </li>
              <li>
                <Link to="/">Order Online</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </menu>
          </div>
          <div>
            <p>Contact</p>
            <menu>
              <li>555 Little Lemon</li>
              <li>
                <a
                  href="tel:410-555-5555"
                  style={{
                    textDecoration: "underline",
                    position: "relative",
                    top: "-0.5rem",
                  }}
                >
                  410-555-5555
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@little-lemon.com"
                  style={{
                    textDecoration: "underline",
                    position: "relative",
                    top: "-0.5rem",
                  }}
                >
                  info@little-lemon.com
                </a>
              </li>
            </menu>
          </div>
          <div>
            <p>Social media</p>
            <menu>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon />
                </a>
              </li>
            </menu>
          </div>
        </div>
      </div>
    </footer>
  );
}
