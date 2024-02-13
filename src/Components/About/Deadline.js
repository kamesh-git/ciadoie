import React from 'react'
import HeadingComp from '../Others/HeadingComp'
import { images_url } from '../../assests/DataBase'
import img1 from "../../assests/bol-02.png";
import img2 from "../../assests/bol-03.png";
import img3 from "../../assests/bol-04.png";

const Deadline = () => {
    return (
        <>
            <img src={images_url + 'navbar images/CI Logo.png'} className='mx-auto mt-4' />
            <HeadingComp head={'Industry Excellence Award & National Symposium'} />
            <div className='mt-4 mb-4 d-flex flex-wrap justify-content-around' style={{
                gap: "12px",
            }}>
                <div className='p-4 bg-danger' style={{borderRadius: "12px"}}>
                    <img src={img1} alt=""/>
                </div>
                <div className='p-4 bg-danger' style={{borderRadius: "12px"}}>
                    <img src={img2} alt=""/>
                </div>
                <div className='p-4 bg-danger' style={{borderRadius: "12px"}}>
                    <img src={img3} alt=""/>
                </div>
            </div>
            {/* <div className="d-flex justify-content-around flex-wrap">
                <h4 className='p-4 text-light bg-danger d-flex' style={{ borderRadius: '10px' }}>
                    <img alt='loading...' width={30} style={{ filter: 'invert(1)' }} src={images_url + '/navbar images/date.svg'}></img>
                    <div className='ms-3'>
                        <p className='mb-2' style={{ fontWeight: 'bold', fontSize: 'larg' }}>Opening Date</p>
                        <p className='mb-2' style={{ fontWeight: 'bold', fontSize: 'larg' }}>10th Feb 2024</p>
                    </div>
                </h4>
                <h4 className='p-4 text-light bg-danger d-flex' style={{ borderRadius: '10px' }}>
                    <img alt='loading...' width={30} style={{ filter: 'invert(1)' }} src={images_url + '/navbar images/date.svg'}></img>
                    <div className='ms-3'>
                        <p className='mb-2' style={{ fontWeight: 'bold', fontSize: 'larg' }}>Submission Deadline</p>
                        <p className='mb-2' style={{ fontWeight: 'bold', fontSize: 'larg' }}>5th March 2024</p>
                    </div>
                </h4>
                <h4 className='p-4 text-light bg-danger d-flex' style={{ borderRadius: '10px' }}>
                    <img alt='loading...' width={30} style={{ filter: 'invert(1)' }} src={images_url + '/navbar images/date.svg'}></img>
                    <div className='ms-3'>
                        <p className='mb-2' style={{ fontWeight: 'bold', fontSize: 'larg' }}>Ceremony Date</p>
                        <p className='mb-2' style={{ fontWeight: 'bold', fontSize: 'larg' }}>28th March 2024</p>
                    </div>
                </h4>
            </div> */}
        </>
    )
}

export default Deadline