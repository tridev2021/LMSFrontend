import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

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

		 </Card.Text>
 <Button type="submit">Submit Test </Button>
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

