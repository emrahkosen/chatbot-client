import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatSliceAction } from "../../store/chat-slice";
import classes from "./FloatingAction.module.css";

const FloatingAction = () => {
  const dispatch = useDispatch();
  const chatslice = useSelector((state) => state.chat.chat);
  // const language = useSelector((state) => state.language);
  // const table = language[language.lang].table;
  // const cart = language[language.lang].cart;

  const handleAction = () => {
    dispatch(chatSliceAction.toggle());
  };

  return (
    <div className={classes.floatingaction} onClick={handleAction}>
      {chatslice === "chat" ? <h4>Chat</h4> : <h4>Chating</h4>}
    </div>
  );
};

export default FloatingAction;
