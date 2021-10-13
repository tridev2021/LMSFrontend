import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap';
import Sidebar from './components/Sidebar';

export default function ImageUpload() {

    const [state, setState] = useState([]);
    const history=useHistory();

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setState({
                image: URL.createObjectURL(img),
                name: localStorage.getItem("username")
            });
        }
    };

    const path = () => {
      
        // history.push("/facultyrights");
        // console.log(state);
      //  const name=localStorage.getItem("username");
        axios.post("http://localhost:8084/api/faculty/image",state)
            // .then(d => {
            //     console.log(d);
            //     history.push("/profilefaculty");
            // })
            history.push("/profilefaculty");
      }

    return (
      <div>
      <Sidebar/>
        <section className="vh-100" >
        <div className="container h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ bordeRadius: "25px",backgroundColor:"orange" }} className="lalit">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    
            <div >
                <Card  style={{border:"none",backgroundColor:"orange"}}>
                <div>
                    <div>
                        <img src={state.image} style={{marginLeft:"70px"}}/>
                        <h1 style={{textAlign:"center"}}>Select Image</h1>
                        <input type="file" name="myImage" onChange={onImageChange} />
                        <button onClick={path}>
                            Upload Image
                        </button>
                    </div>
                </div>
                </Card>
            </div>
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
    }
