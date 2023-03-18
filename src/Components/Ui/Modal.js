import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { chatSliceAction } from "../../store/chat-slice";
import classes from "./Modal.module.css";
const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal} style={props.style}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {

  const dispatch = useDispatch();
  const onCloseHandler = () => {
    dispatch(chatSliceAction.toggle());
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={onCloseHandler} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay style={props.style}>{props.children}</ModelOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
