import React, { useEffect } from 'react'
import HeadingComp from './HeadingComp'
import './Register.css';
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';
import { images_url } from '../../assests/DataBase';

const Register = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional smooth scrolling behavior
        });
    })
    return (
        <>
            <HeadingComp img={images_url + 'navbar images/CI Logo.png'} head={"Continous Improvement Award Registration Form"} />
            <div className='d-flex flex-column align-items-center'>
                <p style={{ color: 'brown', fontFamily: "'Libre Baskerville', serif", fontWeight: 'bold' }}>Continous Improvement Award</p>
                <p><b>Submission Deadline:</b> 5th March 2023</p>
                <p><b>Contact:</b> Dr. K. Padmanabhan Panchu: <a style={{color:'black'}} href="tel:+918939934561">+918939934561</a></p>
            </div>
            <Form id='ciaform' className='ms-5 me-5'>
                <>
                    <FloatingLabel controlId="floatingInput" label="Organisation Name *" className="mb-3">
                        <Form.Control type="text" name='organisationName' placeholder="" required />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Participating unit *" className="mb-3">
                        <Form.Control type="text" name='participatingUnit' placeholder="" required />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Address *">
                        <Form.Control
                            as="textarea"
                            name='address'
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            required
                        />
                    </FloatingLabel>

                    <div className="row">
                        <div className="col"><FloatingLabel controlId="floatingInput" label="Contact Name *" className="mb-3">
                            <Form.Control type="text" name='contactName' placeholder="" required />
                        </FloatingLabel></div>
                        <div className="col"><FloatingLabel controlId="floatingInput" label="Contact Number *" className="mb-3">
                            <Form.Control type='tel' name='contactNumber' placeholder="" required />
                        </FloatingLabel></div>
                    </div>

                    <div className="row">
                        <div className="col"><FloatingLabel controlId="floatingInput" label="Email *" className="mb-3">
                            <Form.Control type="email" name='email' placeholder="" required />
                        </FloatingLabel></div>
                        <div className="col">


                            <FloatingLabel controlId="floatingSelect" label="State *" className="mb-3">
                                <Form.Select name='state' aria-label="Floating label select example" required>
                                    <option></option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                    </div>

                    <FloatingLabel controlId="floatingSelect" label="Type of Organization *" className="mb-3">
                        <Form.Select name='typeOrg' aria-label="Floating label select example" required>
                            <option></option>
                            <option value="Manufacturing">Manufacturing</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSelect" label="Choose the Category *" className="mb-3">
                        <Form.Select name='category' aria-label="Floating label select example" required>
                            <option></option>
                            <option value="Continuous Improvement Award">Continuous Improvement Award</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Number of Case Study that will be submitted? *" className="mb-3">
                        <Form.Control type="number" name='numberofCaseStudy' placeholder="" required />
                    </FloatingLabel>

                    <div className='d-flex justify-content-center mt-5'>
                        <Alert variant='info'>Registration Fee: <span style={{ fontWeight: 'bold' }}>Free</span></Alert>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <Button variant='danger'> <h5>Register</h5> </Button>
                    </div>

                </>

            </Form>

        </>
    )
}

export default Register