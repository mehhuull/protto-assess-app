import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";


function Header() {
    return (
        <div className="header">
            {/* <div className="header__left">
            <h1>Product Portal</h1>
            </div> */}
           
           <div className="header__input">
           <SearchIcon className="header__inputButton"/>
            <input  type="text" placeholder="Search transactions,invoices,booking ids,coustomer names" />
           </div> 

           <div className="header__icons">
           <LanguageIcon className="header__icon" />
            <QuestionAnswerIcon className="header__icon" />
            <NotificationsIcon className="header__icon" />
            <Avatar alt="Jeff Bezos" 
            src="https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e" 
            />
           </div>
           
        </div>
    )
}

export default Header
