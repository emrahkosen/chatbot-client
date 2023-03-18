import './App.css';
import "react-chat-elements/dist/main.css"
//import { Input, MessageBox, SystemMessage } from "react-chat-elements";
import { useEffect } from 'react';
import ChatBox from './Components/ChatBox/ChatBox';
import FloatingAction from "./Components/FloatingAction/FloatingAction";
import { useSelector } from 'react-redux';
import Register from './Components/Chat/Register';


function App() {
  const register = useSelector((state) => state.user.register);
  const chatslice = useSelector((state) => state.chat.chat);


  return (
    <div className="App">
      {register?<>
        {chatslice === "chatting" && (<ChatBox />)}
        <FloatingAction />
      </>: <Register />} 
    </div>
  );
}

export default App;
