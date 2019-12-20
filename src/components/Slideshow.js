import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../styles/slideshow.css";

const Slideshow = () => {
  const slides = [
    {
      title: "This Princess Leia frog",
      link:
        "https://static.twentytwowords.com/cdn-cgi/image/width=718,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.11.38-AM.png"
    },
    {
      title: "This black hole",
      link:
        "https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.11.30-AM.png"
    },
    {
      title: "This half woman",
      link:
        "https://static.twentytwowords.com/cdn-cgi/image/width=670,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.11.20-AM.png"
    },
    {
      title: "These crazy yoga women",
      link:
        "https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.10.53-AM.png"
    },
    {
      title: "This police bunny",
      link:
        "https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.10.36-AM.png"
    },
    {
      title: "This squiggly, out-of-focus woman",
      link:
        "https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.11.49-AM.png"
    },
    {
      title: "This dog wearing gloves",
      link:
        "https://static.twentytwowords.com/cdn-cgi/image/width=671,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.09.32-AM.png"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const randomSlides = e => {
    setActiveSlide(Math.floor(Math.random() * slides.length));
  };

  // componentDidMount
  // Set random slide on page load or refresh

  useEffect(() => {
    randomSlides();
  }, []);

  // Should show new image without reload

  return (
    <>
      <h1 id="main-title">
        Weird Pictures That Will Make You Giggle Despite Your Best Intentions
      </h1>
      <div key={activeSlide}>
        <h2 id="slide-title">{slides[activeSlide].title}</h2>
        <img
          id="slide-image"
          src={slides[activeSlide].link}
          alt={slides[activeSlide].title}
        ></img>
      </div>
      <button className="next-button" onClick={randomSlides}>
        {" "}
        Show me more! <i class="fas fa-arrow-circle-right"></i>
      </button>
    </>
  );
};

export default Slideshow;
