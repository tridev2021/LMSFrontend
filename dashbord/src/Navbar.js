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
        <NavDropdown.Item href="/faculty/faculty"    className="sx">Faculty</NavDropdown.Item>
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

