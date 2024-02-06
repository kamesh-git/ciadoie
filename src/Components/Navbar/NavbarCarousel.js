import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import NavCssTyping from './NavCssTyping';
import { images_url } from '../../assests/DataBase';
import About from '../About';

const NavbarCarousel = () => {
    return (
        <>
            <div id='HomeScroll' style={{ position: 'relative' }}>
                <img style={{width:'100%',margin:"auto 0"}} src="college.jpg" alt="" />
            </div>
            <About />

        </>
    )
}

export default NavbarCarousel
