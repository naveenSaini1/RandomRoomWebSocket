import { useContext } from "react";
import style from "../css/TopicArea.module.css"
import { AuthContext } from "../store/AuthContext";
const CreateRoomHeader=()=>{
   const {createRoom}= useContext(AuthContext);
   const createRoomFunc=()=>{
   let value= prompt("enter The Room Name");
   createRoom(value);
   }

    return (
        <div className={style.createRoomHeaderContainer}>
        
        <div className={style.createRoomBtn} onClick={createRoomFunc}>Create Toom</div>

        </div>
    )

}
export default CreateRoomHeader;