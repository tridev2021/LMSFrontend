import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter   className=" mx font-small pt-4 mt-4"  style={{backgroundColor: "#000"}}>
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 style={{color:"grey"}} className="text-uppercase mb-4 font-weight-bold">
              Realcoderz
            </h6>
            <p style={{color:"grey"}}>
            Founded in 2011 as Decision Management Inc. in Virginia, USA, now RealCoderZ, is leading technology company with expertise in cloud computing, AI, microservices, blockchain, responsive design, mobile apps, digital marketing and creator of industry-leading HR products such as RC teambuilder.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 style={{color:"white"}} className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a style={{color:"grey"}} >Artificial Intelligence</a>
            </p>
            <p>
              <a style={{color:"grey"}} >Data Science</a>
            </p>
            <p>
              <a style={{color:"grey"}}>Cyber Security</a>
            </p>
            <p>
              <a style={{color:"grey"}}>Cloud</a>
            </p>
            <p>
              <a style={{color:"grey"}} >Mobile App Development</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
         
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 style={{color:"white"}} className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p style={{color:"grey"}}>
              <i  className="fa fa-home mr-3" />   Assotech Business Cresterra, Sector 135, Noida
            </p>
            <p style={{color:"grey"}}>
              <i  className="fa fa-envelope mr-3" /> m. info@realcoderz.com
            </p>
            <p style={{color:"grey"}}>
              <i  className="fa fa-phone mr-3" /> +1 (888) 495-8195
            </p>    
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPagePro;