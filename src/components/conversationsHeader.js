import React from 'react'
import { Dropdown } from 'react-bootstrap'
import Avatar from '@material-ui/core/Avatar';
import './dashboard.css'


function ConversationsHeader() {

 

  return (
    
    <div className="p-2 d-flex justify-content-between  px-0 bgclr1 navbar navbar-default navbar-fixed-top " style={{height:'4rem'}}>
      <div className="d-flex flex-row "> 
    <Avatar alt="Koushik" src="/static/images/avatar/1.jpg" className=" my-auto ml-2" /><b id="fadeshow1" className=" my-auto ml-2 text-light">kkoushik9@gmail.com</b>
      </div>
    


     <Dropdown className="my-auto">
        <Dropdown.Toggle variant="secondary" className="clr2" id="dropdown-basic">
            
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">New chat</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>


</div>
    
  );
}

export default ConversationsHeader;
