import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import NavCssTyping from './NavCssTyping';
import { images_url } from '../../assests/DataBase';
import About from '../About';

const NavbarCarousel = () => {
    return (
        <>
            <div id='HomeScroll' style={{ position: 'relative' }} data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                <img style={{width:'100%',margin:"auto 0"}} src={images_url + "navbar images/college.jpg"}  alt="" />
            </div>
            <About />

        </>
    )
}

export default NavbarCarousel
