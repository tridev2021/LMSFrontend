import React from "react";
import {Form , Row , Col ,InputGroup , Button , Card , CardGroup} from "react-bootstrap";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { useHistory } from "react-router";
import PurchaseCourse from "./PurchaseCourse";
import Sidebar from "../components/Sidebar";

const MyCourses = () => {
  const history=useHistory();
  useEffect(() => {
		
		if(sessionStorage.getItem('email')==null){
		window.location.replace("/login");
		  }
		  else{
			console.log('test')
		  }
	})
const PurchaseCourse=()=>{
 
  history.push("/courses")

}

return (
  <>
  <Sidebar/>
<Card style={{width:"800px",padding: "2%",marginLeft:"500px",marginTop:"29px"}} >
  <Card>
 
  <Card.Body>
  <center><h1>My Courses</h1></center>
<button onClick={PurchaseCourse}>Buy Some Other Courses </button>
  </Card.Body>
</Card>
<div className="MyCourses">
	<h1></h1>
  
      <Card.Body>
   <Card style={{width:"600px",padding: "1%",marginLeft:"50px",marginTop:"29px"}} >
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Core Java</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Courses Duration 3 Month </small><button>feed</button>
    </Card.Footer>
  </Card>
    
  <Card style={{width:"600px",padding: "2%",marginLeft:"50px",marginTop:"29px"}} >
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>React JS</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Courses Duration 3 Month </small>
    </Card.Footer>
  </Card>
</Card.Body>
<div class="text-right mt-4">
						  <a href="/studentdashbord">back to dashbord</a>
                     </div>
	</div>
  </Card>
  </>
);
};

export default MyCourses;
