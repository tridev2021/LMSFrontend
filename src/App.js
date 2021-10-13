
import "./App.css";
import Carou from './Carousels';
import FooterPagePro from './Footer';
import Bar from './Navbar';
import Cards from './Cards';

import AdminRights from "./pages/AdminRights";
import EditAdmin from "./pages/EditAdmin";
import EditStudent from "./Studentpages/EditStudent";
import AddAdmin from "./pages/AddAdmin";

import Sidebar from "./components/Sidebar";
import Admingetdelete from "./pages/Admingetdelete";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutUs} from "./pages/AboutUs";
import {
Services,
Admin,
Faculty,
Student,
} from "./pages/Services";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import Lalit from "./pages/Lalit";
import StudentRegistration from "./Studentpages/StudentRegistration";
import StudentLogin from "./Studentpages/StudentLogin";
import Profile from "./Studentpages/Profile";
import MyCourses from "./Studentpages/MyCourses";
import AdminLogin from "./pages/AdminLogin";
import AdminRegistration from "./pages/AdminRegistration";
import FacultyRegistration from "./Facultypages/FacultyRegistration";
import FacultyLogin from "./Facultypages/FacultyLogin";
import FacultyRights from "./Facultypages/FacultyRights";
import Facultygetdelete from "./Facultypages/Facultygetdelete";
import EditFaculty from "./Facultypages/EditFaculty";
import Studentgetdelete from "./Studentpages/Studentgetdelete";
import Feedback from "react-bootstrap/esm/Feedback";
import PurchaseCourse from "./Studentpages/PurchaseCourse";
import Courses from "./pages/Courses";
import FeedbackForm from "./pages/FeedbackForm";
import { Card } from "react-bootstrap";
import StudentDashbord from "./Studentpages/StudentDashbord";
import Leaderboard from "./Studentpages/Leaderboard";
// import StudentReport from "./Studentpages/StudentReport";


function App() {
return (
	// <AdminRights />
	// <Bar/>
	// <Carou/>
	// <Cards/>
	// <FooterPagePro/>
     
  
	<Router>
	{/* <Sidebar /> */}
	<Switch>
		{/* <Route path="./Carousels" exact component={Carou} />
		<Route path="./Footer" exact component={FooterPagePro} /> */}
		<Route path="/" exact component={Bar} />
		{/* <Sidebar/> */}
		<Route path="./Cards" exact component={Cards} />
		<Route path="/about-us" exact component={AboutUs} />
		<Route path="/services" exact component={Services} />
		<Route path="/admin/admin" exact component={AdminLogin} />
		<Route path="/faculty/faculty" exact component={FacultyLogin} />
		<Route path="/student/student" exact component={StudentLogin} />
		<Route path="/contact" exact component={Contact} />
		<Route path="/courses" exact component={Courses} />
		<Route path="/feedbackForm" exact component={FeedbackForm} />
		<Route path="/support" exact component={Support} />
       <Route path="/reg" exact component={AdminRegistration} />
	<Route exact path="/log" exact component={AdminLogin} />
	<Route exact path="/admrights" exact component={AdminRights} />
	<Route exact path="/getdelete" exact component={Admingetdelete} />
	<Route exact path="/edit/:id" exact component={EditAdmin} />

	//....//
	<Route exact path="/studentgetdelete" exact component={Studentgetdelete} />
	<Route exact path="/editstudent/:id" exact component={EditStudent} />
	
          <Route exact path="/add">
            <AddAdmin />
          </Route>
          {/* <Route exact path="/edit/:id" render={props => <EditAdmin />} /> */}

		  //...........//
		  <Route exact path="/facultyreg" exact component={FacultyRegistration} />
	      <Route exact path="/facultylog" exact component={FacultyLogin} />
		  <Route exact path="/facultyrights" exact component={FacultyRights} />
		  <Route exact path="/facultygetdelete" exact component={Facultygetdelete} />
		  <Route exact path="/facultyedit/:id" exact component={EditFaculty} />

          <Route exact path="/studentreg" exact component={StudentRegistration} />
	      <Route exact path="/studentlog" exact component={StudentLogin} />
		  <Route exact path="/studentdashbord" exact component={StudentDashbord} />
		  <Route exact path="/studentprofile" exact component={Profile} />
		  <Route exact path="/mycourse" exact component={MyCourses} />
		  <Route exact path="/leaderboard" exact component={Leaderboard} />
		  {/* <Route exact path="/studentreport" exact component={StudentReport} /> */}
		  <Route exact path="/purchase" exact component={PurchaseCourse} />
	</Switch> 
	</Router>
);
}

export default App;
