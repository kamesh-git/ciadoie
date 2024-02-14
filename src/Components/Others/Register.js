import React, { useContext, useEffect, useState } from 'react'
import HeadingComp from './HeadingComp'
import './Register.css';
import { Alert, Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { images_url } from '../../assests/DataBase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import useFirebase from '../../assests/useFirebase';
import LoadSpinner from '../Loading/LoadSpinner';

const Register = () => {

  const { db } = useFirebase();
  const [loading, setLoading] = useState(false)
  const [sucessMsg, setSucessMsg] = useState(null);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional smooth scrolling behavior
    });
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log(data);
    data["timestamp"] = serverTimestamp()

    if (data["neededAccommodation"] == 'yes' && (!data["27/03/2024"] && !data["28/03/2024"])) {
      alert("Select atleast 1 Date to register")
      throw Error("error")
    }

    setLoading(true)
    try {

      addDoc(collection(db, 'ciawardreg'), data).then((resp) => {
        console.log(resp)
        setSucessMsg('success')
        setTimeout(() => {
          setLoading(false)
          setSucessMsg(null)
        }, 2000);
      }).catch(err => {
        setSucessMsg('failure')
        setTimeout(() => {
          setLoading(false)
          setSucessMsg(null)
        }, 2000);
      })
    }
    catch {
      setSucessMsg('Some error occured reload the page')
      setTimeout(() => {
        setLoading(false)
        setSucessMsg(null)
      }, 2000);
    }
    e.target.reset();
    document.querySelector(".accommodationdates").classList.add("d-none")

  }
  return (
    <>
      <Modal backdrop="static" show={loading}>
        <Modal.Body className="p-0">
          <LoadSpinner sucessMsg={sucessMsg} failmsg={sucessMsg} />
        </Modal.Body>
      </Modal>

      <HeadingComp
        img={images_url + "navbar images/CI Logo.png"}
        head={"Industry Excellence Award Registration Form"}
      />
      <div className="d-flex flex-column align-items-center">
        <p
          style={{
            color: "brown",
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: "bold",
          }}
        >
          Industry Excellence Award
        </p>
        <p>
          <b>Submission Deadline:</b> 10th March 2024
        </p>
        <p>
          <b>Contact:</b> Mr. I. Jaikanth{" "}
          <a style={{ color: "black" }} href="tel:+919345456525">
            +919345456525
          </a>
        </p>
      </div>
      <Form id="ciaform" className="ms-5 me-5" onSubmit={handleSubmit}>
        <>
          <FloatingLabel
            controlId="floatingInput"
            label="Organisation Name *"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="organisationName"
              placeholder=""
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Team Name *"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="teamName"
              placeholder=""
              required
            />
          </FloatingLabel>

          <div className="row">
            <div className="col">
              <FloatingLabel
                controlId="floatingInput"
                label="Contact Name *"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="contactName"
                  placeholder=""
                  required
                />
              </FloatingLabel>
            </div>
            <div className="col">
              <FloatingLabel
                controlId="floatingInput"
                label="Contact Number *"
                className="mb-3"
              >
                <Form.Control
                  type="tel"
                  name="contactNumber"
                  placeholder=""
                  required
                />
              </FloatingLabel>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <FloatingLabel
                controlId="floatingInput"
                label="Email *"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  name="email"
                  placeholder=""
                  required
                />
              </FloatingLabel>
            </div>
            <div className="col">
              <FloatingLabel
                controlId="floatingSelect"
                label="State *"
                className="mb-3"
              >
                <Form.Select
                  name="state"
                  aria-label="Floating label select example"
                  required
                >
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

          <FloatingLabel
                controlId="floatingInput"
                label="No of Members per team *"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  name="nofteammember"
                  placeholder=""
                  required
                />
              </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea2" label="Team Members Names and Designation *">
            <Form.Control
              as="textarea"
              name="teamDetailsNames"
              placeholder="Team Members Names and Designation *"
              style={{ height: "100px" }}
              required
            />
          </FloatingLabel>


          <FloatingLabel controlId="floatingTextarea2" label="Address *">
            <Form.Control
              as="textarea"
              name="address"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingSelect"
            label="Type of Organization *"
            className="mb-3"
          >
            <Form.Select
              name="typeOrg"
              aria-label="Floating label select example"
              required
            >
              <option></option>
              <option value="Manufacturing">Manufacturing</option>
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingSelect"
            label="Choose the Category *"
            className="mb-3"
          >
            <Form.Select
              name="category"
              aria-label="Floating label select example"
              required
            >
              <option></option>
              <option value="Industry Excellence Award">
                Industry Excellence Award
              </option>
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingSelect"
            label="Whether needed accommodation? (Charges applicable) *"
            className="mb-3"
          >
            <Form.Select
              name="neededAccommodation"
              aria-label="Floating label select example"
              onChange={(e) => {
                console.log(e.target.value);
                if (e.target.value == "yes")
                  document
                    .querySelector(".accommodationdates")
                    .classList.remove("d-none");
                else
                  document
                    .querySelector(".accommodationdates")
                    .classList.add("d-none");
              }}
              required
            >
              <option></option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Select>
          </FloatingLabel>

          <Form.Group className="mb-3 accommodationdates d-none">
            <Form.Label>
              Choose Accommodation dates (Charges applicable) *
            </Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                id="checkbox1"
                name="27/03/2024"
                label="27/03/2024"
                value="true"
              />
              <Form.Check
                type="checkbox"
                id="checkbox2"
                name="28/03/2024"
                label="28/03/2024"
                value="true"
              />
            </div>
          </Form.Group>

          <div className="d-flex justify-content-center mt-5">
            <Alert variant="info">
              Registration Fee:{" "}
              <span style={{ fontWeight: "bold" }}>Free</span>
            </Alert>
          </div>

          <div className="d-flex justify-content-center">
            <Button
              type="submit"
              variant="danger"
              color="red"
              background-color="red"
            >
              {" "}
              <h5 color="red">Register</h5>{" "}
            </Button>
          </div>
        </>
      </Form>
    </>
  );
}

export default Register