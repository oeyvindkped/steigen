import React from "react";
import Image from "next/image";
import steigen1 from "../../public/images/steigen1.jpeg";
import steigen2 from "../../public/images/steigen2.jpeg";
import steigen3 from "../../public/images/steigen3.jpeg";

const Carousel = () => (
  <div
    style={{ marginTop: "-6px", marginBottom: "30px" }}
    id="carouselExampleInterval"
    className={`carousel slide `}
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div
        className="carousel-item active"
        data-bs-interval="10000"
        style={{ height: "350px" }}
      >
        <Image src={steigen1} className="d-block w-100" alt="..." />
      </div>
      <div
        className="carousel-item "
        data-bs-interval="2000"
        style={{ height: "350px" }}
      >
        <Image src={steigen2} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item  " style={{ height: "350px" }}>
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
);

export default Carousel;
