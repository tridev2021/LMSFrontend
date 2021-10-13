import React from "react";
import { useHistory } from "react-router";
export const Services = () => {
return (
	<div className="services">
	<h1>LMS Services</h1>
	</div>
);
};

export const Admin = () => {
	const history=useHistory();
	
// return (
	
	history.push("/log")
	// <h1>LMS Admin</h1>
	// <div className="admin">
	// <h1>LMS Admin</h1>

	// </div>


// );
};

export const Faculty = () => {
return (
	<div className="faculty">
	<h1>LMS Faculty</h1>
	</div>
);
};

export const Student = () => {
return (
	<div className="student">
	<h1>LMS Student</h1>
	</div>
);
};
