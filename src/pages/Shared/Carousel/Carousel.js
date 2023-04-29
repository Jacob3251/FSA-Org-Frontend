import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
const NextArrow = (props) => (
  <div {...props}>
    <FaChevronRight className="text-black text-2xl" />
  </div>
);

const PrevArrow = (props) => (
  <div {...props}>
    <FaChevronLeft className="text-black text-2xl" />
  </div>
);
const Carousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const slides = [
    {
      id: 1,
      title: "Slide 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      title: "Slide 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      title: "Slide 3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image:
        "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80",
    },
  ];
  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt={slide.title} className="" />
          <div className="">
            <h1 className="text-3xl font-bold">{slide.title}</h1>

            <p className="text-lg">{slide.content}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
