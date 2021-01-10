
import ConversationsHeader from './conversationsHeader'
import Conversation from './conversation'
import './dashboard.css'

function Conversations() {

  

  return (
    
<>
<ConversationsHeader/>
<div className="w-100  your-class " id="style-4">
<Conversation Name="Pavi" Convo="Hello how are you?"/>
<Conversation Name="Jack" Convo="How was the meeting today?"/>
<Conversation Name="Pavi" Convo="Hello how are you?"/>
<Conversation Name="Jack" Convo="How was the meeting today?"/>
<Conversation Name="Pavi" Convo="Hello how are you?"/>
<Conversation Name="Jack" Convo="How was the meeting today?"/>
<Conversation Name="Pavi" Convo="Hello how are you?"/>
<Conversation Name="Jack" Convo="How was the meeting today?"/>


</div>
</>
    
  );
}

export default Conversations;
