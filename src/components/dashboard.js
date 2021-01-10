
import React from 'react'
import Conversations from './conversations'
import './dashboard.css'
import Chatbox from './chatbox'




function Dashboard() {

    
  
    return (
      <div className="row fullscreen mx-5 my-3 bgclr2 " >
        <div className="col-lg-4 col-md-4 hidden-md hidden-sm hidden-xs brdr  px-0">
        <Conversations/>
            
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 px-0 brdr w-100 h-100 ">
            <Chatbox/>
            </div>
      
      </div>
  
      
    );
  }
  
  export default Dashboard;