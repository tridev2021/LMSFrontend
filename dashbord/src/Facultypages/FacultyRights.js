import React from "react";
import {Card,Col,Row,Button} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router";
import Sidebar from "../components/Sidebar";


export default function FacultyRights() {
  const history=useHistory();
const handleClick =()=> {
     
  history.push("/profilefaculty")
  
      };

      const handleClick1 =()=> {
     
  history.push("/courseget")
  
      };
      
      const handleClick2 =()=> {
     
  history.push("/bulk")
  
      };
      
      const handleClick3 =()=> {
     
  history.push("/ImageUpload")
  
      };
    return (
        <>
        <Sidebar/>

        <section className="vh-100">
        <div className="container h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ bordeRadius: "25px",backgroundColor:"orange"}} className="lalit">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

        <Card  style={{border:"none",backgroundColor:"orange"}}>

        <Row >

      <button style={{height:"100px",width:"200px", backgroundColor:"#000", color:"white", fontSize:"20px"}} onClick= {handleClick}>Edit Faculty</button>
      <button style={{height:"100px",width:"200px", backgroundColor:"#000", color:"white", fontSize:"20px",marginLeft:"60px"}} onClick= {handleClick1}>Courses</button>
      <button style={{height:"100px",width:"200px", backgroundColor:"#000", color:"white", fontSize:"20px",marginTop:"50px"}} onClick= {handleClick2}>Bulk Upload</button>
      <button style={{height:"100px",width:"200px", backgroundColor:"#000", color:"white", fontSize:"20px",marginLeft:"60px",marginTop:"50px"}} onClick= {handleClick3}>Upload Image</button>
      
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

// import React from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHistory } from "react-router";
// import Sidebar from "../components/Sidebar";


// export default function FacultyRights() {
//   const history=useHistory();
// const handleClick =()=> {
     
//   history.push("/studentgetdelete")
  
//       };

//       const handleClick1 =()=> {
     
//         history.push("/courseget")
        
//             };
//             const handleClick2 =()=> {
     
//               history.push("/courseget")
              
//                   };
//                   const handleClick3 =()=> {
     
//                     history.push("/profilefaculty")
                    
//                         };
      
//     return (
//     <>
//     <div><Sidebar/>
// <div className="container mt-5 " >
// <h3 className="font-weight-bold mb-4 pb-2" style={{marginLeft : " 45%",}}>Faculty All Authority</h3>

//   <section className="dark-grey-text text-center" style={{marginLeft : "40%" , width: "100%" , height: "auto"}}>  
//     <p className="text-muted w-responsive mx-auto mb-5"> </p>
    
//         <div className="row" >
        
//         <div className="col-12" >
       
//           <ul className="nav md-pills flex-center flex-wrap mx-0" role="tablist" >

//             <li className="nav-item">
//               <a className="nav-link font-weight-bold " data-toggle="tab" href="#panel33" role="tab">Courses</a>
//             </li>
  
//             <li className="nav-item">
//               <a className="nav-link font-weight-bold " data-toggle="tab" href="#panel36"  role="tab">Admin Profile</a>
//             </li>
//           </ul>
//         </div>
//     </div>
//          <div className="tab-content">
//       <div className="tab-pane fade show in active" id="panel32" role="tabpanel">

//         <div className="row">   
          
//           <div className="col-lg-4 col-md-12 mb-4">
//             <div className="view overlay zoom z-depth-2">
//             <a href = "#" onClick= {handleClick1} >
//               <img  src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
//                className="img-fluid" /> 
//                              </a>

//             </div>
//             <p className="text-uppercase text-center font-weight-bold text-muted my-4">
//               Click to the Image for Faculty Data
//               </p>
//           </div>
          
          
//         </div>
//       </div>
//  <div className="tab-pane fade acitve" id="panel33" role="tabpanel">

//         <div className="row">
          
//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="view overlay zoom z-depth-2">
//             <a href = "#" onClick= {handleClick2}>
//               <img src="https://mdbootstrap.com/img/Photos/Others/project1.jpg" className="img-fluid" />
//               </a>
//             </div>
//             <p className="text-uppercase text-center font-weight-bold text-muted my-4"> Click to the Image for Courses Data 
//               </p>
//           </div>
//         </div>
//       </div>
//          <div className="tab-pane fade" id="panel34" role="tabpanel">

//         <div className="row">
//         <div className="col-lg-4 col-md-6 mb-4">
//             <div className="view overlay zoom z-depth-2">
//             <a href = "#" onClick= {handleClick} >
//               <img src="https://mdbootstrap.com/img/Photos/Others/project8.jpg" className="img-fluid" />
//               </a>
//             </div>
//             <p className="text-uppercase text-center font-weight-bold text-muted my-4"> Click to the Image for Students Data
//               </p>
//           </div>
          
//         </div>

//       </div>
//       <div className="tab-pane fade acitve" id="panel36" role="tabpanel">

//         <div className="row">
          
//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="view overlay zoom z-depth-2">
//             <a href = "#" onClick= {handleClick3}>
//               <img src="https://mdbootstrap.com/img/Photos/Others/project4.jpg" className="img-fluid" />
//               </a>
//             </div>
//             <p className="text-uppercase text-center font-weight-bold text-muted my-4"> Click to the Image for Your Profile
//               </p>
//           </div>
//         </div>
//       </div>
           
//  </div>

// 	</section>
  
  
// </div>
// </div>


// </>
//     );
// }