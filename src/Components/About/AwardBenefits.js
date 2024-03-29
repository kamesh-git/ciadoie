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
                    <li>OPPORTUNITY TO SHARE KNOWLEDGE</li>
                    <li>LEARN FROM OTHER'S EXPERIENCE</li>
                    <li>ALL PARTICIPANTS WILL BE RECOGNIZED WITH PARTICIPATION CERTIFICATE</li>
                    
                </ul>
            </div>
        </>
    )
}

export default AwardBenefits