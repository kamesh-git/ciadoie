import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import NavCssTyping from './NavCssTyping';
import { images_url } from '../../assests/DataBase';
import About from '../About';
import TitleHeadComp from './TitleHeadComp';

const NavbarCarousel = () => {
    return (
        <>
            <div id='HomeScroll' style={{ position: 'relative', backgroundColor: "black" }} data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                <img style={{ width: '100%', margin: "auto 0", filter: 'opacity(0.7)', }} src={images_url + "navbar images/college.jpg"} alt="" />
                <div className="centered-text" style={{position:"absolute",top:"50%",left:"50%",transform: "translate(-50%, -50%)",textAlign: "center",color: "white",}}>
                    <TitleHeadComp col={"white"} head={"CONTINUOUS IMPROVEMENT AWARD"} />
                </div>
            </div>
            <About />

        </>
    )
}

export default NavbarCarousel
