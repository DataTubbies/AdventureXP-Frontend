import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <img
          //Mini golf
          src="https://i.ytimg.com/vi/-VLKjoL0AEk/maxresdefault.jpg"
          alt="carousel-item"
          style={{ width: "100%" }}
        />
      </div>
      <div className="carousel-item h-full">
        <img
          // Go-kart
          src="https://files.guidedanmark.org/files/484/214259_Racehall.jpg"
          alt="carousel-item"
          style={{ width: "100%" }}
        />
      </div>
      <div className="carousel-item">
        <img
          // Laser tag
          src="https://airtrix.dk/wp-content/uploads/2023/12/LaserTag-AirParty.jpg"
          alt="carousel-item"
          style={{ width: "100%" }}
        />
      </div>
      <div className="carousel-item">
        <img
          // Sumo wrestling
          src="https://www.funcenter.no/wp-content/uploads/2019/10/20230610_162634.jpg"
          alt="carousel-item"
          style={{ width: "100%" }}
        />
      </div>
    </Slider>
  );
}
