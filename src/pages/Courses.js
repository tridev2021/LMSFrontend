import React from "react";
import {Form , Row , Col ,InputGroup , Button , Card , CardGroup} from "react-bootstrap";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Feedback from "react-bootstrap/esm/Feedback";
import Sidebar from "../components/Sidebar";

const Courses = () => {
 
    const [data, setdata] = useState([]);

  const history=useHistory();
  useEffect(() => {

	axios.get(`http://localhost:8080/api/course/get`)
			.then(res => {
			 
      const data =res.data;
      
      setdata(data)
      
      
        
				})
      
				
    },[]);
const Feedback=()=>{
history.push("/feedbackForm")
}
	

return (
<div>
  <Sidebar/>
 { data.map(datas=>{
       return(
         <div>
<Card style={{width:"800px",padding: "2%",marginLeft:"500px",marginTop:"29px"}} >
  <Card border="primary">
 
  <Card.Body>
  <center><h1>Courses</h1></center>
  </Card.Body>
</Card>
<div className="Courses ">
      <Card.Body>
   <Card border="primary" style={{width:"600px",padding: "1%",marginLeft:"50px",marginTop:"29px"}}  className="lalit" >
    <Card.Img variant="top" src="" />
    <Card.Body>
 
      <Card.Title>{datas.courseName}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted ">Courses Duration {datas.duration}</small><button className="btn btn-primary" onClick={Feedback} style ={{marginLeft : "250px"}}>FeedBack</button>
    </Card.Footer>
  </Card>
</Card.Body>


	</div>
  </Card>
  </div>
)
})}
</div>
);
}
export default Courses;