import React from "react";
import { Link } from "react-router-dom";

import {
  FaSquareTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div>
        {" "}
        <h4>Support</h4>
        <ul>
          <li>New York,USA</li>
          <li>example@gmail.com</li>
          <li>+92 123123123</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/donate"}>Donate us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <Link to={"/"}>
              <span>
                <FaSquareTwitter />
              </span>
              <span>Twitter</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>
                <FaSquareInstagram />
              </span>
              <span>Instagram</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>
                <FaLinkedin />
              </span>
              <span>LinkedIn</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
