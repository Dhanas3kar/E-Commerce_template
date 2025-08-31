import React, { useState } from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "./Footer.css"

export default function Footer() {
  // Advanced feature: Quick feedback modal
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleFeedbackSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setShowFeedback(false)
      setSubmitted(false)
      setFeedback("")
    }, 2000)
  }

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="12">
            <div className="footer-main">
              <div className="footer-brand">
                <span role="img" aria-label="cart" style={{ marginRight: 8 }}>
                  🛒
                </span>
                Online kart
              </div>
              {/* Developer Details Card */}
              <div className="developer-card">
                <img
                  src="https://avatars.githubusercontent.com/u/10221708?v=4"
                  alt="Dhanasekar"
                  className="dev-avatar"
                />
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
              {/* Advanced Feature: Feedback Modal */}
              <div className="footer-prompt-card">
                <div className="prompt-title">
                  <i className="fa fa-lightbulb-o" aria-hidden="true"></i>{" "}
                  Have a suggestion or feedback?
                </div>
                <button
                  className="prompt-btn"
                  onClick={() => setShowFeedback(true)}
                >
                  Share Now
                </button>
                {showFeedback && (
                  <div className="feedback-modal">
                    <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
                      <label htmlFor="feedback-input">
                        Your feedback helps us improve!
                      </label>
                      <textarea
                        id="feedback-input"
                        value={feedback}
                        onChange={e => setFeedback(e.target.value)}
                        placeholder="Type your suggestion or feedback here..."
                        required
                        rows={3}
                      />
                      <div className="feedback-actions">
                        <button type="submit" className="prompt-btn">
                          {submitted ? "Thank you!" : "Send"}
                        </button>
                        <button
                          type="button"
                          className="prompt-btn cancel"
                          onClick={() => setShowFeedback(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
        <div className="footer-copyright">
          <hr style={{ borderColor: "#23272f", margin: "24px 0 12px 0" }} />
          <p>
            Online kart. All rights reserved.<br />
            <span style={{ fontSize: "0.95rem", color: "#90caf9" }}>
              Made with <span role="img" aria-label="love">❤️</span> in India.
            </span>
          </p>
        </div>
      </Container>
    </footer>
  )
}