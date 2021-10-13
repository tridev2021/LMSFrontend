import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { NavItem  } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'

import { NavDropdown } from "react-bootstrap";

const Nav = styled.div`
background: #000;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #000;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

const logout = () =>{
	sessionStorage.removeItem('email')
	window.location.replace('/student/student')
}

return (
	<>
	<IconContext.Provider value={{ color: "orange" }}>
		<Nav>
		<NavIcon to="#">
			<FaIcons.FaBars onClick={showSidebar} />
		</NavIcon>
		<h1
			style={{ textAlign: "center",
					marginLeft: "300px",
					color: "white" }}
		>
		LEARNING-MANAGEMENT-SYSTEM
		</h1>
		
		<h1 style={{ Align: "LMS",
					// marginRight: "200px",
					color: "white" }} >

		<div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavLink className="nav-link active" to="/">Hello User</NavLink>

		</div>

	
		 </h1>
		</Nav>
		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			<NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon>
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default Sidebar;
