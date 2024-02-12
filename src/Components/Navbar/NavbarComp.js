import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { images_url } from '../../assests/DataBase';
import './NavBar.css'
import { useContext } from 'react';
import ContextProvider from '../../assests/Contextprovider';
import ThemeChanger from '../Others/ThemeChanger';
import { Dropdown } from 'react-bootstrap';
import HeadingComp from '../Others/HeadingComp';
const NavbarComp = () => {

    const [navbarExpand, setNavbarExpand] = useState(false)
    const [navVariant, setNavVariant] = useState('light')

    useEffect(() => {
        localStorage.getItem('theme') == 'dark' && setNavVariant('dark')
    })

    const closeNavbar = () => setNavbarExpand(false)
    const toggleNavbar = () => setNavbarExpand(!navbarExpand)
    const { indconlogo, setIndconlogo } = useContext(ContextProvider)
    function themechange() {
        document.querySelector('html').classList.toggle('dark-theme')
        localStorage.getItem('theme') == 'dark' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark')
        localStorage.getItem('theme') == 'dark' ? setIndconlogo(images_url + 'navbar images/indcon logo dark.png') : setIndconlogo(images_url + 'navbar images/indcon logo.png')
        setNavVariant(localStorage.getItem('theme'))
        closeNavbar()
    }

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <NavLink onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }} className='nav-link themechanger' to={'/activities'}>{children}</NavLink>
    ));


    return (
        <div>
            <Navbar onToggle={toggleNavbar} expanded={navbarExpand} variant={navVariant} style={{ backgroundColor: 'var(--brand-light-col)' }} sticky={'top'} expand="lg">
                <Container className='justify-content-start ms-2 me-3 mw-100' style={{ paddingLeft: '0' }}>
                    <Navbar.Brand className='d-flex align-items-center'>
                        <NavLink className='nav-link nav-logo' to={'/'}>
                            {[images_url + 'navbar images/Anna_University_Logo.png', images_url + "navbar%20images/doie green.png", images_url + 'navbar images/sielogo.png'].map(item => (
                                <img key={item}
                                
                                    style={{width:'4vw',height:"auto"}}
                                    src={item}
                                    className="d-inline-block align-top mt-auto ms-1 me-1 mb-auto"
                                    alt="React Bootstrap logo"
                                />
                            ))}
                        </NavLink>
                    </Navbar.Brand>
                    <h4 className='flex-grow-1 nav-brand-title text-center'>Department of Industrial Engineering</h4>
                    <Navbar.Toggle style={{fontSize:"2vw"}} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='flex-grow-0' style={{left:'0',top:'100%'}} id="basic-navbar-nav">
                        <Nav className="ms-auto ps-4">
                            <NavLink onClick={closeNavbar} className='nav-link text-center' to={'/about'}>About</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

const NotificationSvg = <svg className='mb-1' xmlns="http://www.w3.org/2000/svg" style={{ fill: 'var(--brand-dark-col)' }} height="1em" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
const ContactSvg = <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: 'var(--brand-dark-col)' }} height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
const NewsSvg = <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{ fill: 'var(--brand-dark-col)' }} viewBox="0 0 512 512"><path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg>



export default NavbarComp