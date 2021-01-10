
import './dashboard.css'

function MessageFromYou() {

 

  return (
    <div className="chat_message chat_message_receiver ml-auto mr-3 mt-2"><span className="chat_name chat_name_you">You</span> <t className="text-light"><br/>This is the message </t>
            <span className="chat_timestamp">{new Date().toUTCString()}</span>
              </div>

    
  );
}

export default MessageFromYou;
