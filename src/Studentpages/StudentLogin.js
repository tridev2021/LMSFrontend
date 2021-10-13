import React from "react";
import {Form , Row , Col ,InputGroup , Button , Card} from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/Sidebar";
export default function FormExample() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); const history=useHistory();
    

  const emailChangeHandler= (e)=> {
    setEmail(e.target.value)
    console.log(email)
        }

       const passwordChangeHandler = (e)=>{   
        setPassword(e.target.value)
        console.log(password)
      }

       const handleSubmit = (e) => {
    
        e.preventDefault();
          axios.post("http://localhost:8080/api/student/login",{'email':email,'password':password})
          .then(res=>{
            sessionStorage.setItem("email", email);
              if(res.data=='Login Successfully'){
                  
                window.alert("invalid id and password  !");

                  console.log(res)
                  history.push("/studentlog");
              }
              else {
                // window.alert("Hello User you"+""+"Login Successfully !");
                  // console.log("Invalid email id & Password")
                  history.push("/studentdashbord");

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
      <div><Sidebar/>
      <section className="vh-100" style={{marginLeft : "250px"}}  >
      <div className="container h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ bordeRadius: "25px" }} className="lalit">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      {/* <div className="container" > */}
      <Card style={{border:"none"}} >
      {/* style={{width:"600px",padding: "1%",marginLeft:"500px",marginTop:"29px"}} */}
   <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <center><h1>Student Login </h1></center>
     <Row className= "mb-3">
       <Form.Group as={Col} md="14" controlId="validationCustom02">
         <Form.Label>Email Id</Form.Label>
         <Form.Control
           required
           type="text"
           placeholder="email"
           style={{borderRadius:"25px"}}
           onChange={emailChangeHandler}
         />
         
         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       </Form.Group>
       </Row>
       <Row >
       <Form.Group as={Col} md="14" controlId="validationCustom05">
         <Form.Label>Password</Form.Label>
         <Form.Control onChange={passwordChangeHandler} style={{borderRadius:"25px"}} type="password" placeholder="password" required />
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
          
        <Button type="submit" style={{backgroundColor:"black",borderRadius:"25px"}} >Login</Button> 
        
        <p>New User? <button style={{border:"0px", backgroundColor:"transparent",color:"blue"}} onClick= {handleClick}>Registration</button></p>
        
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
  
 