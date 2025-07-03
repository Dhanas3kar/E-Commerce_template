import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-main">
              <div className="footer-brand">Online-kart</div>
              {/* Developer Details Card */}
              <div className="developer-card">
                <div className="developer-info">
                  <div className="dev-name">Developed by Dhanasekar</div>
                  <div className="dev-role">Full Stack Developer</div>
                </div>
                <div className="footer-social">
                  <a
                    href="https://www.linkedin.com/in/dhanasekar-murugesan-a9321731a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/Dhanas3kar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
              {/* Enhancement: Add a prompt for suggestions */}
              <div className="footer-prompt-card">
                <div className="prompt-title">
                </div>
                <form
                  className="prompt-form"
                  action="mailto:your.email@example.com"
                  method="POST"
                  encType="text/plain"
                >
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Online kart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
