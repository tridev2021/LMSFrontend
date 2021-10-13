import React from "react";
import {Form , Row , Col ,InputGroup , Button , Card} from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FormExample() {

  const [validated, setValidated] = useState(false);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState(); const history=useHistory();
    

  const usernameChangeHandler= (e)=> {
    setUserName(e.target.value)
    console.log(username)
        }

       const passwordChangeHandler = (e)=>{   
        setPassword(e.target.value)
        console.log(password)
      }

       const handleSubmit = (e) => {
    
        e.preventDefault();
          axios.post("http://localhost:8084/api/login",{'username':username,'password':password})
          .then(res=>{
            sessionStorage.setItem("username", username);
              if(res.data=='Login Successfully'){
                  
                window.alert("invalid id and password  !");

                  console.log(res)
                  history.push("/adminprofile");
              }
              else {
                window.alert("Hello User you"+""+"Login Successfully !");
                  // console.log("Invalid email id & Password")
                  history.push("/studentprofile");

              }
          })
      };

    const handleClick =()=> {
     
history.push("/studentreg")

    };
    const handleClick1 =()=> {
     
      history.push("/studentprofile")
      
          };
  
    return (
       
      <div className="container" >
      <Card style={{width:"600px",padding: "1%",marginLeft:"500px",marginTop:"29px"}} >
   <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <center><h1>Student SignUp Form</h1></center>
     <Row className= "mb-3">
       <Form.Group as={Col} md="14" controlId="validationCustom02">
         <Form.Label>Email Id</Form.Label>
         <Form.Control
           required
           type="text"
           placeholder="username"
           onChange={usernameChangeHandler}
         />
         
         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       </Form.Group>
       </Row>
       <Row >
       <Form.Group as={Col} md="14" controlId="validationCustom05">
         <Form.Label>Password</Form.Label>
         <Form.Control onChange={passwordChangeHandler} type="password" placeholder="password" required />
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