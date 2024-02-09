import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./HeroSlider.css"; // Import custom CSS file
import HeroFooter from "./HeroFooter";

// Custom arrow component for previous arrow
function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: "10px" }}
      onClick={onClick}
    >
      <img src="/vector-11.svg" alt="Previous" className="rotate-180" />
    </div>
  );
}

// Custom arrow component for next arrow
function CustomNextArrow(props) {
  const { className, style, onClick, } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: "10px" }}
      onClick={onClick}
    >
      <img src="/vector-11.svg" alt="Next" />
    </div>
  );
}
export default function HeroSlider({scrollToProducts}) {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Remove slick arrows
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="hero-slider-container">
      <Slider {...settings}>
        <div className="bg-[url('/public/rectangle-442@2x.png')] bg-cover h-screen">
          <div className="flex flex-col items-start justify-start py-60 sm:px-60 px-10 box-border space-y-10 h-full text-white bg-black bg-opacity-20">
            <div className="w-[950px] flex flex-row items-start justify-start max-w-full">
              <div className="w-[629px] relative font-extrabold inline-block shrink-0 max-w-full z-[2]">{`Lorem Ipsum `}</div>
            </div>
            <div className="font-medium max-w-[350px] z-[2] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[258px] flex flex-row items-center justify-center relative"
              onClick={scrollToProducts}
            >
              <div className="flex-1 rounded-lg bg-pri overflow-hidden flex flex-row items-center justify-center p-[11px] whitespace-nowrap z-[2]">
                <div className="relative text-9xl font-medium font-lato text-white text-left">
                  Buy Now
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="bg-[url('/public/home-bg.7a2450482751d3c226c5.jpg')] bg-cover h-screen">
          <div className="flex flex-col items-start justify-start py-60 sm:px-60 px-10 box-border space-y-10 h-full text-white bg-black bg-opacity-30">
            <div className="w-[950px] flex flex-row items-start justify-start max-w-full">
              <div className="w-[629px] relative font-extrabold inline-block shrink-0 max-w-full z-[2]">{`Lorem Ipsum `}</div>
            </div>
            <div className="font-medium max-w-[350px] z-[2] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[258px] flex flex-row items-center justify-center relative"
              onClick={scrollToProducts}
            >
              <div className="flex-1 rounded-lg bg-pri overflow-hidden flex flex-row items-center justify-center p-[11px] whitespace-nowrap z-[2]">
                <div className="relative text-9xl font-medium font-lato text-white text-left">
                  Buy Now
                </div>
              </div>
            </button>
          </div>
        </div>
      </Slider>
      <HeroFooter />
    </div>
  );
}
