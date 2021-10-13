import React from "react";
import {Form , Row , Col ,InputGroup , Button , Card} from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function AddAdmin(props) {
       
  const submit = e => {
    let username = e.target[0].value;
    let email= e.target[1].value;
    let password= e.target[2].value;
    let data = {
      username,
      
      email,
      password
    };
    postAdmin(data);
  };
  const history=useHistory();
  const postAdmin = data => {
    axios
      .post("http://localhost:8084/api/Register", data)
      .then(d => {
        console.log(d);
        props.history.push("/");
      })
      .catch(err => alert(err));
  };
  const handleClick = () => {
          history.push("/log");
          
        };
  return (
    <div className="container" >
              <Card style={{width:"600px",padding: "2%",marginLeft:"360px",marginTop:"70px"}} >
         <Form onSubmit={submit}>
               <center><h1>Admin Registration</h1></center>
             <Row className= "mb-3">
               <Form.Group as={Col} md="14" controlId="validationCustom01">
                 <Form.Label>UserName</Form.Label>
               <Form.Control
                  required
                  type="text"
                  placeholder="username"
                  defaultValue="abc"
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
                  defaultValue="abc@gmail.com"
                />
                
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Row>
              
            
    
              <Row >
              <Form.Group as={Col} md="14" controlId="validationCustom05">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="password" required />
                <Form.Control.Feedback type="invalid">
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
         </div>  );
}



 