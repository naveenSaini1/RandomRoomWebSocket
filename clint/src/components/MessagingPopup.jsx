import { useContext, useEffect, useState } from "react";
import styles from "../css/TopicArea.module.css"
import { AuthContext } from "../store/AuthContext";

const MessagingPopup = ({ makeHanllerPopup, selectedRoom }) => {
    const { sendMessage, messageDatabase } = useContext(AuthContext);
    const [inputValue, setInputValue] = useState("");
    const [messageArray, setmessageArray] = useState([]);
    const sendMessageToTheServer = () => {
        sendMessage(inputValue);
        handledMessage();
        setInputValue("");

    }
    useEffect(() => {
        handledMessage();

    }, [selectedRoom])
    const handledMessage = () => {
        let newItems = messageDatabase.filter((item) => {
            if (item["roomName"] == selectedRoom) return item
        })[0]["message"]
        // console.log(newItems,"new Items",newItems);
        setmessageArray(newItems);

    }
    return (

        <>
            <div className={styles.messageMainPopupContainer}>
                <h3 style={{ textAlign: "center" }}>You Selected <span style={{ color: "green", textDecoration: "underline" }}>{selectedRoom}</span>  channel</h3>
                <div className={styles.closeBtn} onClick={makeHanllerPopup}> X</div>
                <div className={styles.messageInsideContainer}>

                    <div className={styles.messageInsideMessage}>
                        {messageArray?.map((item) => <p>{item.content}</p>)}

                    </div>

                    <div className={styles.messageInsideSend}>

                        <input value={inputValue} style={{ flex: 1 }} type="text" name="text" id="text" placeholder="Enter The Message" onChange={(e) => setInputValue(e.target.value)} />
                        <button onClick={sendMessageToTheServer}>Send Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MessagingPopup;