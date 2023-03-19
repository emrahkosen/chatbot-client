import classes from './App.module.css';
import "react-chat-elements/dist/main.css"
//import { Input, MessageBox, SystemMessage } from "react-chat-elements";
import ChatBox from './Components/ChatBox/ChatBox';
import FloatingAction from "./Components/FloatingAction/FloatingAction";
import { useSelector } from 'react-redux';
import Register from './Components/Chat/Register';


function App() {
  const register = useSelector((state) => state.user.register);
  const username = useSelector((state) => state.user.username);
  const chatslice = useSelector((state) => state.chat.chat);


  return (
    <div className={classes.App}>
      {register?<>
        <div className={classes.userinfo}>
            User Name: <h1> {username}</h1>
        </div>
        
        {chatslice === "chatting" && (<ChatBox />)}
        <FloatingAction />

      </>: <Register />} 
    </div>
  );
}

export default App;
