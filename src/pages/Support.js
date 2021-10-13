import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
const Support = () => {
return (
	<div>
		<Sidebar/>
	
	<div className="support">
	<Card id="summary_card" style={{marginLeft:"15%", marginRight:"15%", padding: "2%", marginTop:"8%"}}>

<div class="row no-gutters">
<div class="col-md-4">
<Card.Img  src = "https://ajtaylor-electrical.co.uk/wp-content/uploads/2019/01/IT-business-support-new.jpg"  style = {{ borderRadius: '500px',height:'100%'}}/>
</div>
<div class="col-md-8">

  <Card.Body>
	<Card.Title>
	</Card.Title>
	<Card.Text>
	
<h4 className="text-info">

</h4>
	<Card.Img src = "" style = {{ padding: '6%'}} />
	<h5 className="text-muted" ><i> <center>@ 2021 Learning-Manegement-System </center></i></h5>
	</Card.Text>
  </Card.Body>
  </div>
  </div>

</Card>
	</div>
	</div>
);
};

export default Support;
