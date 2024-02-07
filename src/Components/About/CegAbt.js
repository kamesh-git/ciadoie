import React from 'react'
import './about.css'
import { images_url } from '../../assests/DataBase'
import HeadingComp from '../Others/HeadingComp'

const CegAbt = () => {
	return (
		<>
			<div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
				<div className="row">
					<HeadingComp head={'About'} />
				</div>
				<div style={{ background: 'transparent' }} className="card pb-3">
					<div className="row align-items-center g-0">
						<div className="col-lg-4 d-flex justify-content-center">
							<img width={200} src={images_url + 'navbar images/Anna_University_Logo.png'} className="img-fluid rounded-start" alt="..."></img>
						</div>
						<div className="col-lg-8">
							<div style={{ textAlign: 'justify' }} className="card-body">
								<p className="card-text about-text">Anna
									University, Chennai is a well known Technical
									Institute in India offering higher education and
									research opportunities in a wide array of fields,
									prominently in Engineering. Technology and
									Management.</p>
								
								<p><a target='_blank' rel="noreferrer" href="https://www.annauniv.edu/"><button style={{
								}} className="btn text-light btn-dark">Know More</button></a></p>
							</div>
						</div>
					</div>
					<br /><br />
					<div className="row align-items-center g-0">
						<div className="col-lg-4 d-flex justify-content-center">
							<img width={200} src={"https://upload.wikimedia.org/wikipedia/en/1/1d/CEG_main_logo.png"} className="img-fluid rounded-start" alt="..."></img>
						</div>
						<div className="col-lg-8">
							<div style={{ textAlign: 'justify' }} className="card-body">
								<p className='card-text about-text'> The College of Engineering Guindy (CEG) is a public engineering college in Chennai, India. Founded in 1794 as a survey school, and 1858 as a Civil Engineering School, it is one of the oldest engineering institutions in the country.</p>
								<p><a target='_blank' rel="noreferrer" href="https://ceg.annauniv.edu/"><button style={{
								}} className="btn text-light btn-dark">Know More</button></a></p>
							</div>
						</div>
					</div>
					<div className="row align-items-center g-0">
						<div className="col-lg-4 d-flex justify-content-center">
							<img width={200} src={images_url + "navbar%20images/doie green.png"} className="img-fluid rounded-start" alt="..."></img>
						</div>
						<div className="col-lg-8">
							<div style={{ textAlign: 'justify' }} className="card-body">
								<p className='card-text about-text'> The Department of Industrial
									Engineering (<b>DoIE</b>) in CEG offers excellent
									research opportunities and encourages
									extracurricular activities for students. The
									department nurtures Industrial Engineering
									students by helping and guiding them to widen
									and enhance their knowledge levels and skillset.</p>
								<p><a target='_blank' rel="noreferrer" href="https://www.annauniv.edu/industrial/"><button style={{
								}} className="btn text-light btn-dark">Know More</button></a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CegAbt
