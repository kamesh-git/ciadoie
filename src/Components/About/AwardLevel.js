import React from 'react'
import HeadingComp from '../Others/HeadingComp'

const AwardLevel = () => {
    return (
        <>
            <div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                <HeadingComp head={'Levels of Awards'} />
                <ul className='d-flex flex-column' id='awardbenefits'>
                    <table className='table'>
                    </table>
                    <li>OPERATORS LEVEL</li>
                    <li>MANAGEMENT LEVEL</li>
                </ul>
            </div>
        </>
    )
}

export default AwardLevel