import React from 'react'
import {Card,Col,Row,Button} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router";
import Sidebar from "../components/Sidebar";
import Swal from 'sweetalert2';

export default function StudentDashbord() {
    const history=useHistory();
    const handleClick =()=> {
         
      history.push("/studentprofile")
      
          };
    
          const handleClick1 =()=> {
         
      history.push("/mycourse")
      
          };
          
          const handleClick2 =()=> {
         
      history.push("/feedbackForm")
      
          };
          
          const handleClick3 =()=> {
         
      history.push("/about-us")
      
          };
    
          const handleClick4 =()=>{
            Swal.fire({
                title: '<strong><u>CourseReport</u></strong>'+'',
                html:'Course Name:- React Js '+'<br/>'+'Student Id:- 4'+'<br/>'+'Student Name:-Stefan'+'<br/>'+'Date:-11/10/2021'+'<br/>'+'score:-60%',
                confirmButtonText: 'Ok',
              })
            //   .then((result) => {
            //     /* Read more about isConfirmed, isDenied below */
            //     if (result.isConfirmed) {
            //       Swal.fire('Saved!', '', 'success')
            //     } else if (result.isDenied) {
            //       Swal.fire('Changes are not saved', '', 'info')
            //     }
            //   })
            //   history.push("/studentreport")
          };

          const handleClick5 =()=> {
         
            history.push("/leaderboard")
            
                };

        return (
            <>
            <Sidebar/>
    
            <section className="vh-100" >
            <div className="container h-100 ">
              <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{ bordeRadius: "25px",backgroundColor:"orange"}} className="lalit">
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    
            <Card  style={{border:"none", width:"600px",backgroundColor:"orange"}}>
    
            <Row >
    
          <button style={{height:"100px",width:"200px", backgroundColor:"#000", color:"white", fontSize:"20px"}} onClick= {handleClick}>Profile</button>
          <button style={{height:"100px",width:"200px", backgroundColor:"#000", color:"white", fontSize:"20px",marginLeft:"60px"}} onClick= {handleClick1}>My Courses</button>
          <button style={{height:"100px",width:"200px", backgroundColor:"#000", color:"white", fontSize:"20px",marginTop:"50px"}} onClick= {handleClick2}>Course Feedback</button>
          <button style={{height:"100px",width:"200px", backgroundColor:"#000", color:"white", fontSize:"20px",marginLeft:"60px",marginTop:"50px"}} onClick= {handleClick3}>Take Assessment</button>
          <button style={{height:"100px",width:"200px", backgroundColor:"#000", color:"white", fontSize:"20px",marginLeft:"5px",marginTop:"50px"}} onClick= {handleClick4}>Course Report</button>
          <button style={{height:"100px",width:"200px", backgroundColor:"#000", color:"white", fontSize:"20px",marginLeft:"60px",marginTop:"50px"}} onClick= {handleClick5}>Leaderboard</button>

          </Row>
          </Card>
          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* <Row>
        <Col>
          <Card style ={{height:"230px",width:"400px",marginLeft:"450px",marginTop:"200px",backgroundColor:"teal",paddingTop:"45px"}}>
    
          
            <Card.Body style={{textAlign:"center",margin:"20px"}}>
            
              
            <div className="mb-3">
        <Button variant="secondary" size="lg" onClick= {handleClick}>
         Edit Profile
        </Button >{' '}
        <Button style={{marginLeft:"21px"}} variant="secondary" size="lg" onClick={handleClick1}>
          Course
        </Button>
      </div>
            </Card.Body>
          </Card>
        </Col>
      
        
    
    </Row> */}
    </>
        );
    }