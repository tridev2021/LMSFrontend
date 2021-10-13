import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const Contact = () => {
return (
	<div>
		<Sidebar/>
	
	<div className="contact">
		
	<Card id="summary_card" style={{marginLeft:"15%", marginRight:"15%", padding: "2%", marginTop:"8%"}}>

<div class="row no-gutters">
<div class="col-md-4">
<Card.Img  src = "https://www.humanendeavour.in/wp-content/uploads/2021/02/contact-banner.jpg"  style = {{ borderRadius: '200px',height:'75%'}}/>
</div>
<div class="col-md-8">

  <Card.Body>
	<Card.Title>
	</Card.Title>
	<Card.Text>
	
<h4 className="text-info">
Email:- lms@2021gmail.com

<br/><br/>
Phone No:-011-987654321

</h4>
	<Card.Img src = "" style = {{ padding: '6%'}} />
	<h5 className="text-muted" ><i> <center> @ 2021 Learning-Manegement-System </center></i></h5>
	</Card.Text>
  </Card.Body>
  </div>
  </div>

</Card>
	</div>
	</div>
);
};

export default Contact;
