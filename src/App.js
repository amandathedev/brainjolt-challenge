import React from "react";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Slideshow />
        <Footer />
      </header>
    </div>
  );
}

export default App;
