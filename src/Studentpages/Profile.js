import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import MyCourses from './MyCourses';
import Sidebar from '../components/Sidebar';

export default class Profile extends Component {

	constructor(){
		super();
		this.state={
			id:'',
			name:'',
			email:'',
			mobile:'',
			address:'',
			dateofBirth:''
		
		}
		this.profile=this.profile.bind(this)
		this.nameChangeHandler=this.nameChangeHandler.bind(this)
		this.emailChangeHandler=this.emailChangeHandler.bind(this)
		this.mobileChangeHandler=this.mobileChangeHandler.bind(this)
		this.addressChangeHandler=this.addressChangeHandler.bind(this)
		this.dateOfBirthChangeHandler=this.dateOfBirthChangeHandler.bind(this)
	  
		this.MyCourses=this.MyCourses.bind(this);
	}
	componentDidMount(){
		axios.get("http://localhost:8080/api/student/getByEmail/"+sessionStorage.getItem('email'))
		.then(res=>{
			console.log(res)
			this.setState({
                id:res.data[0].sid,
				name:res.data[0].name,
				email:res.data[0].email,
				mobile:res.data[0].mobileNo,
				address:res.data[0].address,
				dateOfBirth:res.data[0].dateOfBirth

				
			})
	
		})
	}
	

		nameChangeHandler(e){
			this.setState({name:e.target.value})
		}
		emailChangeHandler(e){
			this.setState({email:e.target.value})
		}
		mobileChangeHandler(e){
			this.setState({mobile:e.target.value})
		}
		addressChangeHandler(e){
			this.setState({address:e.target.value})
		}
		dateOfBirthChangeHandler(e){
			this.setState({dateOfBirth:e.target.value})
		}

	profile(e) {
		e.preventDefault();
        axios.put("http://localhost:8080/api/student/updatingStudent/"+this.state.id,
		{'name':this.state.name,
		"email":this.state.email,
		"mobile":this.state.mobile,
		"address":this.state.address,
		"dateOfBirth":this.state.dateOfBirth

	})
        .then(res=>{
			window.alert("Your Profile is updated successfully  !");
			
		});

		
     
	}
MyCourses=()=>{
	// window.alert("click ok to view your courses..");
    let path='mycourse';
	this.props.history.push(path);
}


    render() {
        return (
			// <div className="container" >
			<>
			<Sidebar/>
				 <section className="vh-100"  >
      <div className="container h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ bordeRadius: "25px",width:"92%",marginRight:"00px" }} className="lalit">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
				  <Card  style={{border:"none"}} >
			{/* <Card style={{width:"600px",padding: "1%",marginLeft:"500px",marginTop:"29px"}} >
    */}
               
	<div  id="main">
		<div class="col-div-8">
			<div class="box-8">
				<div class="content-box">
					<div align="center">
					<form onSubmit={this.profile}>
					<div class="input-field">
                        <input disabled placeholder="Student Id" value={this.state.id} id="id" name="student_id" type="number"  class="validate"/>
                    </div><br/>
					 <div class="input-field">
                        <input placeholder="Student Name" value={this.state.name} id="name" name="student_name"  onChange={this.nameChangeHandler} type="text" class="validate"/>
                    </div><br/>
                    <div class="input-field">
                        <input placeholder="Email" id="email" value={this.state.email} name="email"  onChange={this.emailChangeHandler} type="text" class="validate"/>
                    </div><br/>
                    <div class="input-field">
                        <input placeholder="Mobile" id="mobile" value={this.state.mobile} name="mobile"  onChange={this.mobileChangeHandler} type="text" class="validate"/>
                    </div><br/>
                    <div class="input-field">
                        <input placeholder="Address" id="address" name="address" value={this.state.address}  onChange={this.addressChangeHandler} type="text" class="validate"/>
                    </div><br/>

					<div class="input-field">
                        <input placeholder="DateOfBirth" id="dateOfBirth" name="dateOfBirth"  onChange={this.dateOfBirthChangeHandler} value={this.state.dateOfBirth}  class="validate"/>
                    </div><br/>
                    
                    <div class="text-right mt-4">
                        <button id="editProfile"type="submit" class="waves-effect btn-large btn-large-white px-4 black-text">Update Details</button><br/>
                      </div>

					  <div class="text-right mt-4">
                        <button id="courses" onClick={this.MyCourses} type="button" class="waves-effect btn-large btn-large-white px-4 black-text">My Courses</button><br/>
                      </div>

					  <div class="text-right mt-4">
						  <a href="/studentdashbord">back to dashbord</a>
                     </div>

                      </form>
                    </div>
				</div>
			</div>
		</div>
	</div>
		</Card>
		</div>
     <div >
                    {/* <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	</>
        )
    }
}