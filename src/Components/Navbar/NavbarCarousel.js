import React from "react";
import Carousel from "react-bootstrap/Carousel";
import NavCssTyping from "./NavCssTyping";
import { images_url } from "../../assests/DataBase";
import About from "../About";
import TitleHeadComp from "./TitleHeadComp";

const NavbarCarousel = () => {
  return (
    <>
      <div
        
      >
        <div className="d-flex justify-content-center">
          <img
            id="navLogo"
            src={images_url + "navbar%20images/doie green.png"}
            className="mx-auto"
          />
        </div>

        <p
          style={{
            textAlign: "center",
          }}
          className="nav-link text-center w-100 justify-content-center m-0 mt-2" id="presents"
        >
          presents
        </p>
      </div>
      <div
        id="HomeScroll"
        style={{ position: "relative", backgroundColor: "black" }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="300"
      >
        <img
          style={{ width: "100%", margin: "auto 0", filter: "opacity(0.7)" }}
          src={images_url + "navbar images/college.jpg"}
          alt=""
        />
        <div
          className="centered-text"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
          }}
        >
          <TitleHeadComp
            col={"white"}
            head={"INDUSTRY EXCELLENCE AWARD 2024"}
          />
        </div>
      </div>
      <About />
    </>
  );
};

export default NavbarCarousel;
