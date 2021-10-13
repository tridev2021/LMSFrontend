import React from "react";
import {Form , Row , Col ,InputGroup , Button , Card} from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Sidebar from "../components/Sidebar";

export default function AddAdmin(props) {
       
  const submit = e => {
    let username = e.target[0].value;
    let email= e.target[1].value;
    let password= e.target[2].value;
    let address= e.target[3].value;
    let mobile= e.target[4].value;
    let data = {
      username,
      email,
      password,
      address,
      mobile
    };
    postAdmin(data);
  };
  const history=useHistory();
  const postAdmin = data => {
    axios
      .post("http://localhost:8084/api/faculty", data)
      .then(d => {
        console.log(d);
         history.push("/facultylog");
      })
      .catch(err => alert(err));
  };
  const handleClick = () => {
          history.push("/faculty/faculty");
          
        };
  return (
    
    <div><Sidebar/>
    <section className="vh-100" style={{marginLeft : "250px"}}>
    <div className="container h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ bordeRadius: "25px" }} className="lalit">
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

              <Card style={{border:"none"}} >
           <Form onSubmit={submit}>
               <center><h1 style={{ color: "teal" }}>Faculty Registration</h1></center>
             <Row className= "mb-3">
               <Form.Group as={Col} md="14" controlId="validationCustom01">
                 <Form.Label>UserName</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="username"
                  style={{borderRadius:"25px"}}
                 
                />
               
               
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    
              </Form.Group>
              </Row>
              <Row >
              <Form.Group as={Col} md="14" controlId="validationCustom02">
                <Form.Label>Email Id</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="email"
                  style={{borderRadius:"25px"}}
                />
                
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Row>
              
            
    
              <Row >
              <Form.Group as={Col} md="14" controlId="validationCustom05">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" required style={{borderRadius:"25px"}}/>
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>
              </Row>
              <Row >
              <Form.Group as={Col} md="14" controlId="validationCustom02">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="address"
                  style={{borderRadius:"25px"}}
                />
                 <Row >
              <Form.Group as={Col} md="14" controlId="validationCustom02">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="mobile"
                  style={{borderRadius:"25px"}}
                />
                
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Row>
                
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
              
            <Button type="submit" classNameName="lalit" style={{borderRadius:"25px",backgroundColor:"black"}}>Submit form</Button>
            <p>Already Registered? <button style={{border:"25px", backgroundColor:"transparent",color:"blue"}} classNameName="lalit" onClick= {handleClick}>Login</button></p>
            
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



 