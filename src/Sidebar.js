import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InboxIcon from '@material-ui/icons/Inbox';
import DescriptionIcon from '@material-ui/icons/Description';
import AccessibilityIcon from '@material-ui/icons/Accessibility';



function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Product Portal</h1>
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={DashboardIcon} title="Dashboard" />
            <SidebarRow Icon={InboxIcon} title="Inbox" />
            <SidebarRow Icon={DescriptionIcon} title="Invoices" />
            <SidebarRow Icon={AccessibilityIcon} title="Products" />
                   
        </div>
    )
}

export default Sidebar
