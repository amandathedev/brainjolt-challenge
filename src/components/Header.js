import React, { Component } from "react";
import "../styles/header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar sticky-top">
          <a class="navbar-brand" href="https://twentytwowords.com/">
            <span id="header-num">22</span>
            <br></br>Words
          </a>
        </nav>
      </div>
    );
  }
}
