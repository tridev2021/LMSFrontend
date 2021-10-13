import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Upload Assesemment",
	path: "/about-us",
	icon: <IoIcons.IoMdCloudUpload />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,


},
{
	title: "Faculty",
		path: "/faculty/faculty",
	icon: <IoIcons.IoMdPerson />,
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
	title: "Logout",
	path: "/faculty/faculty",
	icon: <IoIcons.IoMdLogOut />,
},

];
