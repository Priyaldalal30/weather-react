import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="logo">Pd</div>
        <div className="coded">
          Coded by
          <a
            href="https://priyal-dalal.netlify.app"
            className="priyal"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Priyal Dalal{" "}
          </a>
          | Hosted on
          <a
            href="https://app.netlify.com/teams/priyaldalal30/overview"
            className="netlifyLink"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            Netlity
          </a>
        </div>
        <div className="links">
          <span className="linkedin">
            <a
              href="http://www.linkedin.com/in/priyaldalal30"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedlink"
            >
              <i className="fa-brands fa-linkedin"></i>{" "}
            </a>
          </span>
          <span className="instagram">
            <a
              href="https://www.instagram.com/priyaldalal/"
              target="_blank"
              rel="noopener noreferrer"
              className="instalink"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </span>
          <span className="facebook">
            <a
              href="https://www.facebook.com/priyal.dalal/"
              target="_blank"
              rel="noopener noreferrer"
              className="fblink"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </span>
          <span className="github">
            <a
              href="https://github.com/Priyaldalal30/weather-react"
              target="_blank"
              rel="noopener noreferrer"
              className="githublink"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
