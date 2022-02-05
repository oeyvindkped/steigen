import React from "react";
import Image from "next/image";
import style from "../../styles/Carousel.module.css";
import steigen1 from "../../public/images/steigen1.jpeg";
import steigen2 from "../../public/images/steigen2.jpeg";
import steigen3 from "../../public/images/steigen3.jpeg";

const Carousel = () => (
  <div>
    <div
      id="carouselExampleInterval"
      className={`carousel slide `}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <Image src={steigen1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <Image src={steigen2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <Image src={steigen3} className="d-block w-100" alt="..." />
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
  </div>
);

export default Carousel;
