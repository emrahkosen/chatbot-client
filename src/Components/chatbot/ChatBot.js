import React, { useEffect, useState } from "react";
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import classes from "./ChatBot.module.css";
import { useSelector } from "react-redux";

var stompClient =null;

const ChatBot = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const userName = useSelector((state) => state.user.username);

    useEffect(()=>{
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }, [])

    const onError = (err) => {
        console.log(err);
        
    }
    const onConnected = () => {
        //stompClient.subscribe('/chatroom/messages', onMessageReceived);
        stompClient.subscribe('/user/' + userName + '/private', onMessageReceived);
    }

    const onMessageReceived = (payload)=>{
        var payloadData = JSON.parse(payload.body);
        payloadData.status = "receive";
        console.log("payloadData: " + payloadData);
        setMessages(values =>[...values, {sender:payload.sender, status: "receive", message: payloadData.message}]);
    }

    const handleMessage = event => {
        const {value}=event.target;
        setMessage(value);
        
    }
    const sendValue = () => {
        if(stompClient){
            let retVal = message;
            let retMessage = {
                sender:userName,
                message: retVal
            }
            setMessages(values =>[...values, {sender:retMessage.sender, status: "send", message: retMessage.message}]);
            //stompClient.send("/app/chatbot", {}, JSON.stringify(retMessage));
            stompClient.send("/app/private-chat", {}, JSON.stringify(retMessage));
        }

        setMessage("");
    }
    return <div className={classes.chatBot}>
        <div className={classes.messages}>
            <ul>
                <li className={classes.receive}>
                    Hello, how can i help you?
                </li>
                {messages.map(message =><li className={classes[message.status]}>
                        <h4>{message.sender}</h4>
                        <p>{message.message}</p>
                    </li>)}
            </ul>
        </div>
        <div className={classes.input}>
            <input type="text" className={classes.inputMessage} placeholder="Enter the message" value={message} onChange={handleMessage} /> 
            <button type="button" className={classes.sendButton} onClick={sendValue}>Send</button>
        </div>
    </div>
};

export default ChatBot;