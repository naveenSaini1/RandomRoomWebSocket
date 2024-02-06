import { useContext, useState } from "react";
import style from "../css/TopicArea.module.css"
import { AuthContext } from "../store/AuthContext";

const Popup=()=>{
const {onclickSetUser}=useContext(AuthContext)
const [inputName, setInputName] = useState('');
const [error, setError] = useState('');

  const handleSubmit = () => {
    if (inputName.trim() === '') {
      setError('Please enter a valid name.');
      return;
    }
    else{
        setError("");
        onclickSetUser(inputName);
    }
  };
    return (
        <>
         <div className={style.popupContainer}>
      <div className={style.popup}>
        <h2>Enter Your Name</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        {error && <p className={style.errorMessage}>{error}</p>}
        <button className={style.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
        </>
        
    )
}
export default Popup;