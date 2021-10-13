import React from "react";
import { Card } from "react-bootstrap";
import {Form , Row , Col , Button } from "react-bootstrap";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Sidebar from "../components/Sidebar";

export  const FeedbackForm = () => {

	const handelSubmit=(e)=>{
		window.alert("Thank You for giving your valueable feedback !")
	}

	const [data, setdata] = useState([]);
    const history = useHistory();
	useEffect(()=>{
		axios.get(`http://localhost:8080/api/course/get`)
        .then(res=>{
			const data = res.data;
			setdata(data)
		}) 
	})

return (
	<>
	<Sidebar/>
	<div>
 { data.map(datas=>{
       return(
         <div>
	<div>
	

	<Card id="summary_card" style={{marginLeft:"25%", marginRight:"25%", padding: "2%", marginTop:"8%"}}>

<div class="row no-gutters">
<div class="col-md-4">
<Card.Img  src = "https://media.istockphoto.com/photos/your-feedback-matters-picture-id688306678?k=20&m=688306678&s=612x612&w=0&h=6eusS3fgJNgtxGxcVI7GOJMffYc3rcv9jprMVKTK-4o="  style = {{ borderRadius: '200px',height:'75%'}}/>
</div>
<div class="col-md-8">

  <Card.Body>
	<Card.Title>
	</Card.Title>
	<Card.Text>
	
<h4 className="text-info">
 Course	Feedback Form
</h4>
<div>
 <form onSubmit={handelSubmit}>
 <Form.Group as={Col}  controlId="validationCustom01" >
            <Form.Label>Course Name:- {datas.courseName}</Form.Label><br/>
			<Form.Label>Course Duration:- {datas.duration}</Form.Label><br/>
			<Form.Label>Course Price:- ${datas.price}</Form.Label>
          </Form.Group>


 <Form.Group as={Col}  controlId="validationCustom01" >
            <Form.Label>Write Your FeedBack Here..</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="feedback"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
		  <Button type="submit">Submit </Button>
		  <div class="text-right mt-4">
						  <a href="/studentdashbord">back to dashbord</a>
                     </div>
           
 </form>
</div>
	<Card.Img src = "" style = {{ padding: '6%'}} />
		</Card.Text>
  </Card.Body>
  </div>
  </div>
</Card>
	</div>
	</div>
)
})}
</div>
</>
);
};
export default FeedbackForm;