import React from 'react'
import HeadingComp from '../Others/HeadingComp'

const Eligibility = () => {
    return (
        <>
            <div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                <HeadingComp head={'Eligibility'} />
                <ul className='d-flex flex-column' id='awardbenefits'>
                    <table className='table'>
                    </table>
                    <li>ANY MANUFACTURING ORGANIZATION, IRRESPECTIVE OF SIZE OR INDUSTRY SECTOR, IS ELIGIBLE TO APPLY</li>
                    <li>THE MANUFACTURING FACILITY MUST HAVE BEEN OPERATIONAL FOR A MINIMUM PERIOD OF 5 YEARS</li>
                </ul>
            </div>
        </>
    )
}

export default Eligibility