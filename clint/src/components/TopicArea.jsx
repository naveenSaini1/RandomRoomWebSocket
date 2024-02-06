import { useContext, useState } from "react";
import style from "../css/TopicArea.module.css"
import Topic from "./Topic";
import { AuthContext } from "../store/AuthContext";
import MessagingPopup from "./MessagingPopup";
const TopicArea=()=>{
    const {messageDatabase,hanlerSetSelectedRoom,selectedRoom}= useContext(AuthContext);
    const [isActivePopup,setIsActivePopup]=useState(false);
    const makeHanllerPopup=(roomName)=>{
        console.log("Topic area room Name",roomName._targetInst)
        setIsActivePopup((pre)=>!pre);
        if(!isActivePopup==true)hanlerSetSelectedRoom(roomName);
        
    }
    return (
        <>
        <div className={style.topicAreaContainer}>
            {messageDatabase.map((item)=> <Topic makeHanllerPopup={makeHanllerPopup} key={item.roomId} text={item.roomName}/>)}


        </div>
        {(isActivePopup) &&  <MessagingPopup makeHanllerPopup={makeHanllerPopup} selectedRoom={selectedRoom} />}
       
        
        </>
    )

}
export default TopicArea;