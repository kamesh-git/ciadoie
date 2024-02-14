import React from 'react'
import SieAbt from './SieAbt'
import Others from './Others'
import Deadline from './Deadline'
import AwardBenefits from './AwardBenefits'
import AboutAward from './AboutAward'
import './index.css'
import Eligibility from './Eligibility'
import AwardLevel from './AwardLevel'
import Guidelines from './Guidelines'

const About = () => {
  return (
    <div id='AboutScroll' style={{ backgroundColor: 'var(--brand-light-col)' }}>
    <br />
    <img src={process.env.PUBLIC_URL + '/sielogo.png'} alt="Description" width="200px" height="relative" self-align="center!important" className='mx-auto mt-4' />
    <AboutAward />
    <AwardBenefits />
    <Guidelines />
    <Eligibility />
    <Deadline />
    <Others />
    </div>
  )
}

export default About