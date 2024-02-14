import React from 'react'
import HeadingComp from '../Others/HeadingComp'
import { Alert, Button, ListGroup, Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Others = () => {
  return (
    <>
      
      <div className="container-fluid padding mb-3 d-flex justify-content-center" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
          <a target='_blank' href='https://forms.gle/J2J93uNeHmi6AZDo8'><Button variant='primary' className='text-light display-5' >Click Here To Register online</Button></a>
      </div>
      <div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
        <HeadingComp head={'Award Category'} />
        <div className="d-flex justify-content-center">
          <h4 className='p-4 text-light bg-danger' style={{ borderRadius: '10px' }}>
            Industry Excellence Award
          </h4>
        </div>
      </div>
      <div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
        {/* <HeadingComp head={'Submission Template'} />
        <div className="d-flex justify-content-center">
          <h4 className='p-4 text-light bg-success' style={{ borderRadius: '10px' }}>
            Download
          </h4>
        </div>
        <hr /> */}
        <div className="d-flex justify-content-center">
          <Alert variant='info'>Registration Fee: <span style={{ fontWeight: 'bold' }}>Free</span></Alert>
        </div>
      </div>
    </>
  )
}

export default Others