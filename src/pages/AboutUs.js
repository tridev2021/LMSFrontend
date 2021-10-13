import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";


import Swal from 'sweetalert2';

import {Form , Row , Col , Button } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

export const AboutUs = () => {

    const [data, setdata] = useState([]);

  const history=useHistory();
  useEffect(() => {

	axios.get(`http://localhost:8080/api/questions/getall`)
			.then(res => {	 
      const datas =res.data;
      setdata(datas)
	
				})
				console.log(data);
    },[]);

   const report=()=>{
    Swal.fire({
      title: '<strong>Assessment has been submitted !!!</strong>'+'',
      // html:'Course Name:- React Js '+'<br/>'+'Student Id:- 4'+'<br/>'+'Student Name:-Stefan'+'<br/>'+'Date:-11/10/2021'+'<br/>'+'score:-70%',
      confirmButtonText: 'Ok',
    
    })
    history.push("/studentdashbord")
   }

return (
	<div>
		<Sidebar/>
	
	<div className="home">
		{data.map(datas=>{
			return(
				<div>
		
		<Card style={{width:"700px",padding: "1%",marginLeft:"300px",marginTop:"29px"}} >

<div class="row no-gutters">
{/* <div class="col-md-4">
<Card.Img  src = "https://storage.googleapis.com/omkarsoft/files/latest-images/learning-management-system.jpg"  style = {{ borderRadius: '200px',height:'75%'}}/>
</div> */}
<div class="col-md-18">
  <Card.Body>
  <Card.Text >
<h4 className="text-info">
React JS MCQ
</h4>
        <Form.Label >{datas.qid}. {datas.questions}  </Form.Label>
         <select >
        <option>{datas.option1}</option>
        <option>{datas.option2}</option>
        <option>{datas.option3}</option>
        </select>

        <Form.Label >2. Which of the following keyword is used to create a class inheritance?  </Form.Label>
         <select >
        <option>Create</option>
        <option>Extends</option>
        <option>This</option>
        </select>

        <Form.Label >3.What is the default port where webpack-server runs?  </Form.Label>
         <select >
        <option>8000</option>
        <option>3000</option>
        <option>3030</option>
        </select>

        <Form.Label >4. How many numbers of elements a valid react component can return? </Form.Label>
         <select >
        <option>2</option>
        <option>1</option>
        <option>3</option>
        </select>

        <Form.Label >5.  How many ways of defining your variables in ES6?  </Form.Label>
         <select >
        <option>5</option>
        <option>3</option>
        <option>1</option>
        </select>

		 </Card.Text>
 <Button type="submit" onClick={report}>Submit Test </Button>
  </Card.Body>
  </div>
  </div>

</Card>
</div>
)
})}
</div>
</div>
);
};

