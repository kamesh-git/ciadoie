import React from 'react'
import HeadingComp from '../Others/HeadingComp'

const AwardBenefits = () => {
    return (
        <>
            <div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
                <HeadingComp head={'Award Benefits'} />
                <ul className='d-flex flex-column' id='awardbenefits'>
                    <table className='table'>

                    </table>
                    <li>VALUABLE FEEDBACK REPORT BY EXPERTS</li>
                    <li>PROFESSIONAL RECOGNITION FOR PARTICIPANTS</li>
                    <li>AN INDEPENDENT, OBJECTIVE ASSESSMENT FROM EXPERIENCED ASSESSORS</li>
                    <li>WITNESS LIVE THE BEST CASE STUDIES OF IMPROVEMENT & INNOVATION IN ORGANIZATIONS</li>
                    <li>LEARN THE LATEST DEVELOPMENTS IN IMPROVEMENT, INNOVATION PHILOSOPHIES AND METHODOLOGIES</li>
                    <li>ENCOURAGE YOUR TEAM TO TAKE ACTION AND DEVELOP A CULTURE OF IMPROVEMENT WITHIN YOUR ORGANIZATION</li>
                </ul>
            </div>
        </>
    )
}

export default AwardBenefits