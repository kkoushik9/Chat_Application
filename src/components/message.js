
import './dashboard.css'

function Message() {

 

  return (
    <div className="chat_message ml-3 mt-2"><span className="chat_name">Koushik</span> <t className="text-light"><br/>This is the message </t>
            <span className="chat_timestamp">{new Date().toUTCString()}</span>
              </div>

    
  );
}

export default Message;
