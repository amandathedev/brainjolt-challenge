import React, { Component } from "react";
import "../styles/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer fixed-bottom">
        <div className="container text-center">
          {/* Social media icons */}
          <a href="http://www.facebook.com">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="http://www.twitter.com">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="#">
            <i class="fas fa-envelope-square"></i>
          </a>
          <a href="http://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    );
  }
}
