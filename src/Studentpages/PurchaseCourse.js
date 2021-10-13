// import React from "react";
// import {Form , Row , Col ,InputGroup , Button , Card , CardGroup} from "react-bootstrap";
// import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect } from "react";

// const MyCourses = () => {
//   useEffect(() => {
		
// 		if(sessionStorage.getItem('email')==null){
// 		window.location.replace("/login");
// 		  }
// 		  else{
// 			console.log('test')
// 		  }
// 	})
// return (
// <Card style={{width:"800px",padding: "2%",marginLeft:"500px",marginTop:"29px"}} >
//   <Card>
 
//   <Card.Body>
//   <center><h1>My Courses</h1></center>

//   </Card.Body>
// </Card>
// <div className="MyCourses">
// 	<h1></h1>
  
//       <Card.Body>
//    <Card style={{width:"600px",padding: "1%",marginLeft:"50px",marginTop:"29px"}} >
//     <Card.Img variant="top" src="" />
//     <Card.Body>
//       <Card.Title>Core Java</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Courses Duration 3 Month </small>
//     </Card.Footer>
//   </Card>
    
//   <Card style={{width:"600px",padding: "2%",marginLeft:"50px",marginTop:"29px"}} >
//     <Card.Img variant="top" src="" />
//     <Card.Body>
//       <Card.Title>Core Java</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Courses Duration 3 Month </small>
//     </Card.Footer>
//   </Card>

// </Card.Body>
// 	</div>
//   </Card>
// );
// };

// export default MyCourses;
import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux';

import { Card } from "react-bootstrap";

 function PurchaseCourse() {

  const dispatch = useDispatch();

    const[courseName,setCourseName]=useState('');
    const[duration,setDuration]=useState('');
    const[price,setPrice]=useState('');
    const[studentName,setStudentName]=useState('');
    
    
      const onCourseChange = e => {
        setCourseName({
          courseName: e.target.value
        });
      };
      const onDurationChange = e => {
        setDuration({
          duration: e.target.value
        });
      };
      const onPriceChange = e => {
        setPrice({
          price: e.target.value
        });
      };
      const onStudentNameChange = e => {
        setStudentName({
          studentName: e.target.value
        });
      };
    const handleSubmit = e => {
      e.preventDefault();
      const data = {
        courseName: courseName.courseName,
        duration: duration.duration,
        price: price.price,
        studentName: studentName.studentName,
      }
      
      dispatch({
              type:'PURCHASE_COURSE',
              data});
       }
       const save=()=>{
        window.alert("course purchase succesfully");
       }
    return (
        <div>
            <Card style={{width:"800px",padding: "2%",marginLeft:"500px",marginTop:"29px"}} >
   <Card>
 
   <Card.Body>
   <center><h1>Courses</h1></center>

   </Card.Body>
 </Card>
 <div className="MyCourses">
 	<h1></h1>
  
       <Card.Body>
    <Card style={{width:"600px",padding: "1%",marginLeft:"50px",marginTop:"29px"}} >
     <Card.Img variant="top" src="" />
     <Card.Body>
       <Card.Title>Spring boot</Card.Title>
       <Card.Text>
         This is a wider card with supporting text below as a natural lead-in to
         additional content. This content is a little bit longer.
       </Card.Text>
     </Card.Body>
     <Card.Footer>
       <small className="text-muted">Courses Duration 3 Month  <p>Price:-$20</p></small> <button onClick={save}  style={{marginLeft:"240px",width:"50px"}}>Buy</button>
     </Card.Footer>
   </Card>
    
   

 </Card.Body>
 	</div>
   </Card>      
   </div>
    )
}

export default connect()(PurchaseCourse);
