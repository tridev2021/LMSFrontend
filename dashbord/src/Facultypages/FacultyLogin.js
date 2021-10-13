import React,{useEffect,useState} from "react";
import { Form, Row, Col, InputGroup, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Sidebar from "../components/Sidebar";
export default function FormExample() {

  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value)
        
    
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
   
  }

    const  handleSubmit = (e) => {
   
    localStorage.setItem("username",username);
   
    e.preventDefault();
     axios.post("http://localhost:8084/api/faculty/login", { 'username': username, 'password': password })
      .then((res) => {
        sessionStorage.setItem('username',username);
        localStorage.setItem("username",username);
        if(res.data=="Login Successfully"){
          history.push("/facultyrights");
        }
        else{
          window.alert("Your credentials are incorrect");
        }
      }
      
      )}

  


  

  const handleClick = () => {

    history.push("/facultyreg")

  };

  return (

   <div><Sidebar/>

    <section className="vh-100" style={{marginLeft : "250px"}} >
      <div className="container h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ bordeRadius: "25px" }} className="lalit">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <Card style={{border:"none"}}>
                      <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <center><h1 style={{ color: "teal" }}>Faculty Login Form</h1></center>
                        <Row>
                          <Form.Group as={Col} md="14" controlId="validationCustom01" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" onChange={usernameChangeHandler} placeholder="username" required style={{borderRadius:"25px"}} />
                            <Form.Control.Feedback type="invalid">
                              Please provide username.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>

                        <Row >
                          <Form.Group as={Col} md="14" controlId="validationCustom05">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={passwordChangeHandler} placeholder="password" required style={{borderRadius:"25px"}}/>
                            <Form.Control.Feedback type="invalid">
                              Please provide password.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>
                        <Row >
                          <Form.Group classNameName="mb-3">
                            <Form.Check
                              required
                              label="Agree to terms and conditions"
                              feedback="You must agree before submitting."
                              feedbackType="invalid"
                            />
                          </Form.Group>
                        </Row>

                        <Button type="submit" classNameName="lalit" style={{borderRadius:"25px",backgroundColor:"black"}} >Login</Button>

                        <p>New User? <button style={{ border: "0px", backgroundColor: "transparent", color: "blue" }} onClick={handleClick}>Registration</button></p>

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

