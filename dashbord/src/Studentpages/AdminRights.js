import React from "react";
import {Card,Col,Row,Button} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router";


export default function AdminRights() {
  const history=useHistory();
const handleClick =()=> {
     
  history.push("/studentgetdelete")
  
      };

      const handleClick1 =()=> {
     
        history.push("/Facultygetdelete")
        
            };
      
    return (
        <>
      {/* <Row xs={3} md={3} className="g-4"> */}
      
        
      
  <Row>
    <Col>
    {/* <button style ={{height:"100px",width:"160px"}}> */}
      <Card style ={{height:"230px",width:"400px",marginLeft:"450px",marginTop:"200px",backgroundColor:"teal",paddingTop:"45px"}}>

      
        <Card.Body style={{textAlign:"center",margin:"20px"}}>
        
          
        <div className="mb-3">
    <Button variant="secondary" size="lg" onClick= {handleClick}>
      Student
    </Button >{' '}
    <Button style={{marginLeft:"21px"}} variant="secondary" size="lg" onClick= {handleClick1} >
      Faculty
    </Button>
  </div>
        </Card.Body>
      </Card>
      {/* </button> */}
    </Col>
  
    

</Row>
</>
    );
}

