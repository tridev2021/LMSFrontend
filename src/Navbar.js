import React from 'react';
import { NavDropdown,Nav,Navbar} from 'react-bootstrap';
import Carou from './Carousels';

export default function Bar(){
    return (
        <div>
           <Navbar expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home" style={{marginLeft:"60px"}}>Learning Management System</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav style={{marginLeft:"800px"}}>
      <Nav.Link href="#features">About</Nav.Link>
      </Nav>
      <Nav style={{marginLeft:"20px"}}>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
      </Nav>
      <Nav style={{marginLeft:"20px"}}>
      <NavDropdown  title="Services" >
        <NavDropdown.Item href="#action/3.1"   className="sx" >Admin</NavDropdown.Item>
        {/* <NavDropdown.Divider /> */}
        <NavDropdown.Item href="#action/3.2"    className="sx">Faculty</NavDropdown.Item>
        {/* <NavDropdown.Divider /> */}
        <NavDropdown.Item href="/student/student"    className="sx">Student</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
{/* style={{backgroundColor :"#000", color: "#fff" }} */}
<Carou/>
        </div>
    )
}

// import { React, useState, useEffect } from 'react'
// import { Container, Navbar, Nav, Modal, Form, Button, NavDropdown ,NavLink  } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import merahai from "../../images/AMS-logos_white.png";


// const UserNavigationMenu = () => {


//     const [showAdmin, setShowAdmin] = useState(false);
//     const [showStudent, setShowStudent] = useState(false);
//     const [showRegisterAdmin, setShowRegisterAdmin] = useState(false);
//     const [name, setName] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const AddAdmin = async () => {
//         var password = document.getElementById('password').value;
//         var confirmPassword = document.getElementById('confirm_password').value;
//         if (password === "" || confirmPassword === "") {
//             alert('password is empty')
//         } else if (password === confirmPassword && password !== "" && confirmPassword !== "") {
//             let formField = new FormData();
//             formField.append('name', name);
//             formField.append('email', email);
//             formField.append('password', password);
//             alert('successfully register')
         
//     }

  

//         const history = useHistory();
//         useEffect(() => {
//             if (localStorage.getItem('user-info')){
//                 history.push("/adminHome")
//             }
//             // if (localStorage.getItem('UserHome')){
//             //     history.push("/UserHome")
//             // }

//         },[])

   

// const Home =()=>
// {
// history.push('/')
// }
    
//     return (
//         <>
//             <Navbar collapseOnSelect expand="lg" className="bgi" variant="dark" >
//                 <Container>
//                 <img src={merahai} id="logo" />
//                     <Navbar.Brand href="#">Alumni<span style={{color :"#FF5252"}}>-Meet</span></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
//                     <Navbar.Collapse id="responsive-navbar-nav">

//                          <Nav className="me-auto" >
//                             <Nav.Link href="#" onClick={Home} id="voli"   style={{marginLeft : "15px"}}>Home</Nav.Link>
//                             <Nav.Link href="#about" onClick="" id="voli"   style={{marginLeft : "15"}}>About Us</Nav.Link>
//                             <Nav.Link href="#gallery" onClick="" id="voli"  style={{marginLeft : "15px"}}>Gallery</Nav.Link>
//                             <Nav.Link href="#contact" onClick="" id="voli"  style={{marginLeft : "15px"}}>Contact Us</Nav.Link>
//                             <Nav.Link href="#ourteam" onClick="" id="voli"  style={{marginLeft : "15px"}}>Our Team</Nav.Link>
//                             <Nav.Link href="/pollq" onClick="/pollq" id="voli"  style={{marginLeft : "15px"}}>Poll</Nav.Link>
//                              {/* <NavLink ><Link  to="/pollq" className="btn sandy"  id="voli">Poll</Link></NavLink>  */}
//                         </Nav>
//                          <Nav>
//                             <NavDropdown
//                                 id="nav-dropdown-dark-example"
//                                 title="Login"
//                                 menuVariant="dark"
//                             > 
//                                  <NavDropdown.Item href="#" onClick={() => setShowStudent(true)}>Student</NavDropdown.Item> 
//                                 {/* <NavDropdown.Divider />  */}
//                                  <NavDropdown.Item href="/login" id="uni">Admin</NavDropdown.Item> 
//                              </NavDropdown> 
//                             <NavDropdown
//                                 id="nav-dropdown-dark-example"
//                                 title="Register"
//                                 menuVariant="dark"
//                             > 
//                                  <NavDropdown.Item href="#" onClick={() => setShowRegisterAdmin(true)}>Admin</NavDropdown.Item> 
//                                 <NavDropdown.Divider /> 
//                             </NavDropdown>
//                         </Nav> 
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//             {/* -----Admin ---model--- from -------- */}
//             <Modal id="admin"
//                 show={showAdmin}
//                 onHide={() => setShowAdmin(false)}
//                 dialogClassName="modal-90w"
//                 aria-labelledby="example-custom-modal-styling-title" >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="example-custom-modal-styling-title">
//                         Admin Login
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="email" required placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
//                         </Form.Group>

//                         <Form.Group className="mb-3" >
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//                         </Form.Group>

//                         <Button variant="primary" type="submit" className="btnning" onClick={login} >
//                             Login
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//             {/* ----------student --- model ---- form----- */}
//             <Modal id="stud"
//                 show={showStudent}
//                 onHide={() => setShowStudent(false)}
//                 dialogClassName="modal-90w"
//                 aria-labelledby="example-custom-modal-styling-title"  >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="example-custom-modal-styling-title">
//                         Student Login
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group className="mb-3" >
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="email" required placeholder="Enter email" />
//                         </Form.Group>
//                         <Form.Group className="mb-3" >
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" required placeholder="Password" />
//                         </Form.Group>
//                         <Button variant="primary" type="submit" className="btnning" >
//                             Login
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//             {/* ----------Admin Register --- model ---- form----- */}
//             <Modal id="adminRegister "
//                 show={showRegisterAdmin}
//                 onHide={() => setShowRegisterAdmin(false)} 
//                 dialogClassName="modal-90w"
//                 aria-labelledby="example-custom-modal-styling-title"
                
//             >
//                 <Modal.Header closeButton >
//                     <Modal.Title id=" example-custom-modal-styling-title">
//                         Admin Register
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Enter Name</Form.Label>
//                             <Form.Control type="text" placeholder="Enter Name" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
//                         </Form.Group>
//                         <Form.Group className="mb-3" >
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="email" placeholder="Enter email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                         </Form.Group>

//                         <Form.Group className="mb-3" >
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control id="password" type="password" placeholder="Password" required name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         </Form.Group>
//                         <Form.Group className="mb-3" >
//                             <Form.Label>Confirm Password</Form.Label>
//                             <Form.Control id="confirm_password" type="password" required placeholder="Password" />
//                         </Form.Group>
//                         <Button variant="primary" type="submit" className="btnning" onClick={AddAdmin}>
//                             Register
//                         </Button>
//                         <hr />
//                         <div id="error"></div>
//                     </Form>
//                 </Modal.Body>
//             </Modal>


//         </>


//     )
// }
// }
// export default UserNavigationMenu;