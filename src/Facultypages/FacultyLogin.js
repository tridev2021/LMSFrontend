import React from "react";
import {Form , Row , Col ,InputGroup , Button , Card} from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FacultyLogin() {
    const [validated, setValidated] = useState(false);
    const history=useHistory();

    const handleClick =()=> {
     
history.push("/facultyreg");

    };

    const handleClick1 =()=> {
     
      history.push("/facultyrights")
      
          };
  
  
    return (
       
            <div className="container" >
         <Card style={{width:"600px",padding: "2%",marginLeft:"360px",marginTop:"70px"}} >
      <Form  onSubmit={handleClick1}>
          <center><h1>Faculty Login Form</h1></center>
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
          <Form.Group as={Col} md="14" controlId="validationCustom05">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" required />
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
          
        <Button type="submit" >Login</Button> 
        
        <p>New User? <button style={{border:"0px", backgroundColor:"transparent",color:"blue"}} onClick= {handleClick}>Registration</button></p>
        
      </Form>
     </Card>
     </div>
   
    );
  }
  
 