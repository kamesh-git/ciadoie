import React from 'react'
import SieAbt from './SieAbt'
import Others from './Others'
import Deadline from './Deadline'
import AwardBenefits from './AwardBenefits'

const About = () => {
  return (
    <div id='AboutScroll' style={{ backgroundColor: 'var(--brand-light-col)' }}>
    <AwardBenefits />
    <Deadline />
    <Others />
    </div>
  )
}

export default About