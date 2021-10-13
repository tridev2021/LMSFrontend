import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useEffect } from "react";
import axios from "axios";
import Sidebar from '../components/Sidebar';

const Leaderboard=()=>{

  const [data , setdata]= useState([]);

  const history=useHistory();

  useEffect(() => {

	axios.get(`http://localhost:8080/api/leaderboard/getall`)
			.then(res => {
			 
                const data =res.data;
      
                setdata(data)
              
				})
      		
    },[]);

    return (
        <div><Sidebar/>
        { data.map(datas=>{
       return(
         <div>

      <section className="vh-100" style={{marginLeft : "250px"}}  >
      <div className="container h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ bordeRadius: "25px",backgroundColor:"orange" }} className="lalit">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  
  <Card style={{border:"none",backgroundColor:"orange"}}>
 
  <Card.Body>
  <center><h1 style={{color:"white"}}> Student Leaderboard </h1></center>
  </Card.Body>
</Card>
<div className="Courses ">
      <Card.Body>
   <Card border="primary" style={{width:"600px",padding: "1%",marginLeft:"50px",marginTop:"29px"}}  className="lalit" >
    <Card.Body>
      <Card.Text>1.Course Name:-{datas.courseName} Score:-{datas.score}<br/> Student Name:-{datas.studentName}</Card.Text>
      <Card.Text>2.Course Name:-React JS Score:-50%<br/> Student Name:-Stefan</Card.Text>
      <Card.Text>3.Course Name:-React JS Score:-47%<br/> Student Name:-Test</Card.Text>
   
   </Card.Body>
    
  </Card>
  <div class="text-right mt-4">
						  <a href="/studentdashbord">back to dashbord</a>
                     </div>
</Card.Body>
	</div>
  
          </div>
     <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     </div>
       )
})}

    </div>
    
    )
}
export default Leaderboard;