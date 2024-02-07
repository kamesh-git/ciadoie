import React from 'react'
import CegAbt from './CegAbt'
import SieAbt from './SieAbt'
import Others from './Others'
import Deadline from './Deadline'

const About = () => {
  return (
    <div id='AboutScroll' style={{ backgroundColor: 'var(--brand-light-col)' }}>
    <CegAbt />
    <Deadline />
    <Others />
    </div>
  )
}

export default About