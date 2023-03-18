import React from "react";
//import { MessageBox } from "react-chat-elements";
//import { useSelector } from "react-redux";
import Modal from "../Ui/Modal";
import classes from "./ChatBox.module.css";
import ChatBot from "../chatbot/ChatBot";

const ChatBox = (props) => {
  //const language = useSelector((state) => state.language);
  //const close = language[language.lang].close;

  return (
    <Modal style={{ bottom: "7vh", right: "4%" }}>
      <div className={classes.main}>
        <ChatBot />
       
      </div>
    </Modal>
  );
};

export default ChatBox;
