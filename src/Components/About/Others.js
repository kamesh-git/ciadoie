import React from 'react'
import HeadingComp from '../Others/HeadingComp'
import { Alert, Button, ListGroup, Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Others = () => {
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
      <div className="container-fluid padding mb-3 d-flex justify-content-center" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
        <NavLink className='nav-link' to={'/register'}>
          <Button variant='dark'>Click Here To Register online</Button>
        </NavLink>
      </div>
      <div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
        <HeadingComp head={'Award Category'} />
        <div className="d-flex justify-content-center">
          <h4 className='p-4 text-light bg-danger' style={{ borderRadius: '10px' }}>
            Continuous Improvement Award
          </h4>
        </div>
      </div>
      <div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
        <HeadingComp head={'Submission Template'} />
        <div className="d-flex justify-content-center">
          <h4 className='p-4 text-light bg-success' style={{ borderRadius: '10px' }}>
            Download
          </h4>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <Alert variant='info'>Registration Fee: <span style={{ fontWeight: 'bold' }}>Free</span></Alert>
        </div>
      </div>
    </>
  )
}

export default Others