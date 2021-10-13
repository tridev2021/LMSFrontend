import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";



export const SidebarData = [
{
	title: "Take Assesemment",
	path: "/about-us",
	icon: <IoIcons.IoMdCopy />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,


},
{
	title: "Student",
		path: "/student/student",
	icon: <IoIcons.IoIosPerson />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	
},
{
	title: "Contact",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},
{
	title: "Courses",
	path: "/courses",
	icon: <IoIcons.IoMdBook />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	
},
{
	title: "Support",
	path: "/support",
	icon: <IoIcons.IoMdHelp />,
},

{
	title: "LogOut",
	path: "/student/student",
	icon: <IoIcons.IoMdLogOut />,
	
},

];
