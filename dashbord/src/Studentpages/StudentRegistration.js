import React from "react";
import {Form , Row , Col ,InputGroup , Button , Card} from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Sidebar from "../components/Sidebar";

export default function AddAdmin(props) {
       
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();

  const history=useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/student/registration",
    {
      'name': name,
      'email':email,
      'password':password,
      'address':address,
      'mobileNo':mobile,
      'dateOfBirth':dateOfBirth

    })
    .then(res=>{
      window.alert(name+""+"Registred successfully  !");
      props.history.push('/studentlog')
      console.log(res)
    })

    }

    
   const nameChange=(e)=>{
    setName(e.target.value)
 }

 const addressChange=(e)=>{
  setAddress(e.target.value)
}

const mobileChange=(e)=>{
setMobile(e.target.value)
}

const emailChange=(e)=>{
setEmail(e.target.value)
}

const passwordChange=(e)=>{
setPassword(e.target.value)
}

const dateOfBirthChange=(e)=>{
setDateOfBirth(e.target.value)
}

  const handleClick = () => {
          history.push("/studentlog");
          
        };
  return (
    <div>
      <Sidebar/>
    <section className="vh-100" style={{marginLeft : "250px"}}  >
    <div className="container h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col-lg-12 col-xl-11" style={{ height:"500%" }}>
          <div className="card text-black" style={{ bordeRadius: "25px",width:"94%"}} className="lalit">
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <Card style={{border:"none"}} >
         {/* <Card style={{width:"600px",padding: "1%",marginLeft:"500px",marginTop:"29px"}} > */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <center><h1>Student Registration Form</h1></center>
        <Row className= "mb-3">
          <Form.Group as={Col} md="14" controlId="validationCustom01">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="enter name"
              onChange={nameChange}
             
            />
           
           
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          </Form.Group>
          </Row>
          <Row className= "mb-3">
          <Form.Group as={Col} md="14" controlId="validationCustom01">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="enter address"
              onChange={addressChange}
            />
           
           
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          </Form.Group>
          </Row>
          <Row className= "mb-3">
          <Form.Group as={Col} md="14" controlId="validationCustom01">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              required
              type="Mobile"
              placeholder="enter mobile number"
              onChange={mobileChange}
            />
           
           
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          </Form.Group>
          </Row>
          <Row className= "mb-3">
          <Form.Group as={Col} md="14" controlId="validationCustom01">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              required
              type="Date"
              
              onChange={dateOfBirthChange}
            />
           
           
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          </Form.Group>
          </Row>
          <Row >
          <Form.Group as={Col} md="14" controlId="validationCustom02">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="email"
              onChange={emailChange}
            />
            
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Row>
          
        

          <Row >
          <Form.Group as={Col} md="14" controlId="validationCustom05">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="password" required />
            <Form.Control.Feedback
              onChange={passwordChange}
              type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row >
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        </Row>
              
            <Button type="submit">Submit form</Button>
            <p>Already Registered? <button style={{border:"0px", backgroundColor:"transparent",color:"blue"}} onClick= {handleClick}>Login</button></p>
            
          </Form>
         </Card>
         </div>
     <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </div>
    );
}