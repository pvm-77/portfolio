import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">Design and development by <a href="https://github.com/pvm-77" target="_blank" rel="noopener noreferrer">pvm-77</a></p>
          </div>
          <div className="col-md-4 text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-4">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:sfzalig@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-center text-md-end">
            <p className="small text-muted mb-0">&copy; {currentYear} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
