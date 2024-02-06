
import { useContext } from 'react'
import './App.css'
import CreateRoomHeader from './components/CreateRoomHeader'
import Popup from './components/Popup'
import TopicArea from './components/TopicArea'
import UserProvieer, { AuthContext } from './store/AuthContext'
import MessagingPopup from './components/MessagingPopup'

function App() {
  const {user}= useContext(AuthContext);
  console.log(user,"kkklk");

  return (
  <>
    {!user?  <Popup/>
    :
    <>
    <p> User Name {user}</p>
     <CreateRoomHeader/>
      <TopicArea/> 
      
      </>

    }


    </>
  
  )
}

export default App
