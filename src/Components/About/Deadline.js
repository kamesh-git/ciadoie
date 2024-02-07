import React from 'react'
import HeadingComp from '../Others/HeadingComp'
import { images_url } from '../../assests/DataBase'

const Deadline = () => {
    return (
        <>
            <HeadingComp img={images_url + 'navbar images/CI Logo.png'} head={'Continuous Improvement Award & National Symposium'} />
            <div className="d-flex justify-content-around flex-wrap">
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
            </div>
        </>
    )
}

export default Deadline