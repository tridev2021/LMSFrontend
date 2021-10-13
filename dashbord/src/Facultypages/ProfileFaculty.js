import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Sidebar from '../components/Sidebar';

export default function ProfileFaculty() {

	
	const [id, setId] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [address, setAddress] = useState('');
    const history=useHistory();
	

	useEffect(() => {
		axios.get(`http://localhost:8084/api/faculty/getByName/${localStorage.getItem("username")}`)
			.then(res => {
			
				localStorage.setItem("id", res.data[0].fid)
				

				setId({
					id: res.data[0].fid,
				})
				setUsername({
					username: res.data[0].username,
				})
				setEmail({
					email: res.data[0].email,
				})
				setMobile({
					mobile: res.data[0].mobile,
				})
				setAddress({
					address: res.data[0].address,
				})
			})
	});

	const idChangeHandler = (e) => {
		setId(e.target.value)

	}

	const usernameChangeHandler = (e) => {
		setUsername(e.target.value)

	}

	const emailChangeHandler = (e) => {
		setEmail(e.target.value)

	}
	const mobileChangeHandler = (e) => {
		setMobile(e.target.value)

	}
	const addressChangeHandler = (e) => {
		setAddress(e.target.value)

	}

	  const submitForm = () => {
				axios.put(`http://localhost:8084/api/faculty/update/${localStorage.getItem("id")}`,{
					'username':username,
					'email':email,
					'mobile':mobile,
					'address':address,
					
				})	
				
			  };

			//   const ImageUploader = () =>{
			// 	  history.push("/ImageUpload");
			//   }



	return (
		  <div><Sidebar/>
		<section className="vh-100" >
		<div className="container h-100 ">
		  <div className="row d-flex justify-content-center align-items-center h-100 ">
			<div className="col-lg-12 col-xl-11">
			  <div className="card text-black" style={{ bordeRadius: "25px"}} className="lalit">
				<div className="card-body p-md-5">
				  <div className="row justify-content-center">
					<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
			<Card style={{border:"none"}} >


				<div id="main">
					<div class="col-div-8">
						<div class="box-8">
							<div class="content-box">
								<div>
									<form onSubmit={submitForm}>
										<div class="input-field">
											<input disabled placeholder="Faculty Id" value={id.id} onChange={idChangeHandler} id="id" name="student_id" type="number" class="validate" />
										</div><br />
										<div class="input-field">
											<input placeholder="User Name" defaultValue={username.username} onChange={usernameChangeHandler} id="name" name="student_name" type="text" class="validate" />
										</div><br />
										<div class="input-field">
											<input placeholder="Email" id="email" defaultValue={email.email} onChange={emailChangeHandler} name="email" type="text" class="validate" />
										</div><br />
										<div class="input-field">
											<input placeholder="Mobile" id="mobile" defaultValue={mobile.mobile} onChange={mobileChangeHandler} name="mobile" type="text" class="validate" />
										</div><br />
										<div class="input-field">
											<input placeholder="Address" id="address" name="address" defaultValue={address.address} onChange={addressChangeHandler} type="text" class="validate" />
										</div><br />

										<div class="text-right mt-4">
											<button id="editProfile" type="submit" class="waves-effect btn-large btn-large-white px-4 black-text">Update Details</button><br />
										</div>
										
										{/* <div class="text-right mt-4">
											<button id="editProfile" class="waves-effect btn-large btn-large-white px-4 black-text" onClick={ImageUploader}>Upload Image</button><br />
										</div> */}
									</form>
								</div>
							</div>
						</div>
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
    </section>
	</div>  
	)

}