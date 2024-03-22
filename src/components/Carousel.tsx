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
          src="https://images.pexels.com/photos/6370072/pexels-photo-6370072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="carousel-item"
          style={{ width: "100%", height: "10%" }}
        />
      </div>
      <div className="carousel-item h-full">
        <img
          // Go-kart
          src="https://images.pexels.com/photos/861464/pexels-photo-861464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="carousel-item"
          style={{ width: "100%", height: "10%" }}
        />
      </div>

      <div className="carousel-item">
        <img
          // Paint Ball
          src="https://images.pexels.com/photos/16236298/pexels-photo-16236298/free-photo-of-maend-leg-sport-sta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="carousel-item"
          style={{ width: "100%", height: "10%" }}
        />
      </div>
    </Slider>
  );
}
