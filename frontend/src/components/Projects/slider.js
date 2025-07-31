import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoCarousel = ({ images, size }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div style={{width: `${size}`, margin: "0 auto"}}>
      <style>{`
        .slick-dots li button:before {
          color: lightgray !important;
          font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
          color: yellow !important;
        }
      `}</style>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index}`} style={{width: "100%", borderRadius: "8px"}} />
          </div>
        ))}
      </Slider>
    </div>
  );

}


export default PhotoCarousel;