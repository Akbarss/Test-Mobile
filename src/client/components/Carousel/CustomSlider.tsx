import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Iconify from "../Icon/Iconify";

interface CustomSliderProps {
  children: React.ReactNode;
  color?: string;
}

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const NextArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hide-on-small-screen"
      style={{
        width: "56px",
        height: "56px",
        position: "absolute",
        top: "42%",
        right: "-5%",
        border: "0",
        background: "none",
        cursor: "pointer",
        color: "red",
      }}
    >
      <Image width={35} height={35} className="hide-on-small-screen" src="/ArrowRound.svg" alt="" />
    </button>
  );
};

export const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hide-on-small-screen"
      style={{
        width: "56px",
        height: "56px",
        position: "absolute",
        top: "42%",
        left: "-5%",
        border: "0",
        background: "none",
        cursor: "pointer",
        transform: "rotate(180deg)",
      }}
    >
      <Image width={35} height={35} className="hide-on-small-screen" src="/ArrowRound.svg" alt="" />
    </button>
  );
};

export const CustomSlider: React.FC<CustomSliderProps> = ({ children, color }) => {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings: Settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
    dots: false,
    arrows: false,
    swipeToSlide: false,
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      <Stack className="hide-on-small-screen" direction="row" spacing={0.3} width="100%" justifyContent="center">
        <IconButton
          sx={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            p: "0",
            transform: "rotate(180deg)",
          }}
          onClick={handlePrevious}
        >
          <Iconify icon="bi:arrow-right" sx={{ width: 35, color: color }} />
        </IconButton>
        <IconButton
          sx={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            p: "0",
          }}
          onClick={handleNext}
        >
          <Iconify icon="bi:arrow-right" sx={{ width: 35, color: color }} />
        </IconButton>
      </Stack>
    </div>
  );
};
