import React from 'react'
import CegAbt from './CegAbt'
import SieAbt from './SieAbt'
import Others from './Others'

const About = () => {
  return (
    <div id='AboutScroll' style={{ backgroundColor: 'var(--brand-light-col)' }}>
    <CegAbt />
    <Others />
    </div>
  )
}

export default About