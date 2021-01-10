import { Button } from 'react-bootstrap'
import React from 'react'
import { Form } from 'react-bootstrap'
import Avatar from '@material-ui/core/Avatar';
import Message from './message.js'
import MessageFromYou from './messageFromYou.js'
import './dashboard.css'


function Chatbox() {

 

  return (
    
   <>

            <nav className="navbar navbar-default navbar-fixed-top  bgclr1" style={{height:'4rem'}}>
            <div className="d-flex flex-row"> 
    <Avatar alt="V" src="/static/images/avatar/1.jpg" className="my-auto ml-2" /><h3 className=" my-auto ml-3 text-light">Venkata</h3>
      </div>
            </nav>

            <div className="w-100 your-class-chat" id="style-4">
            <Message/>
              <MessageFromYou/>
              <Message/>
              <MessageFromYou/>
              <Message/>
              <Message/>
              <MessageFromYou/>
              <MessageFromYou/>
              <Message/>
              <MessageFromYou/>
              </div>
            <Form className="py-2  form-inline d-flex bottomdiv bgclr1" >
              
            <Form.Control autoFocus placeholder="Type your message...." type="text" className=" m-2 row " style={{flex:'1',borderRadius:'25px'}}></Form.Control>
            <Button type="submit" className="ml-2 mr-2 bd-highlight" >Send</Button>
            
            </Form>
            
            </>
  );
}

export default Chatbox;
