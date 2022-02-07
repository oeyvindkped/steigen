import React from "react";
import Image from "next/image";
import { useMediaQuery, useTheme } from "@mui/material";
import style from "../../styles/Carousel.module.css";
import steigen1Web from "../../public/images/steigen1_web.jpeg";
import steigen2Web from "../../public/images/steigen2_web.jpeg";
import steigen3Web from "../../public/images/steigen3_web.jpeg";
import steigen1Mobile from "../../public/images/steigen1_mobile.jpeg";
import steigen2Mobile from "../../public/images/steigen2_mobile.jpeg";
import steigen3Mobile from "../../public/images/steigen3_mobile.jpeg";

const Carousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      style={{ marginTop: "-7px", marginBottom: "30px" }}
      id="carouselExampleInterval"
      className={`carousel slide `}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <Image
            src={isMobile ? steigen1Mobile : steigen1Web}
            className={`d-block w-100 ${style.theimage}`}
            alt="..."
          />
        </div>
        <div className="carousel-item " data-bs-interval="5000">
          <Image
            src={isMobile ? steigen2Mobile : steigen2Web}
            className={`d-block w-100 ${style.theimage}`}
            alt="..."
          />
        </div>
        <div className="carousel-item  " data-bs-interval="5000">
          <Image
            src={isMobile ? steigen3Mobile : steigen3Web}
            className={`d-block w-100 ${style.theimage}`}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
