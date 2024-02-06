import { createContext, useEffect, useState } from "react";
import SockJS from 'sockjs-client/dist/sockjs';
import Stomp from 'stompjs';

export const AuthContext = createContext({
  user: "",
  onclickSetUser: () => { },
  createRoom: () => { },
  hanlerSetSelectedRoom:()=>{},
  selectedRoom:"",
  messageDatabase:[]

})




const UserProvieer = ({ children }) => {
  const [user, setUser] = useState("");
  const [messageDatabase,setMessageDatabase]=useState([]);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom,setSelectedRoom]=useState("");
  const [chatConnection, setChatConnection] = useState(null);
  const onclickSetUser = (userName) => {
    console.log("its mealling")
    setUser(userName);
  }
  const hanlerSetSelectedRoom=(roomName)=>{
    setSelectedRoom(roomName);
  }

  // get All The Data From server at first
  useEffect(() => {
    fetch('http://localhost:8080/rooms').then((res) => { return res.json() }).then((res) => {
      setRooms(res);
      let newItems=res.filter((item)=>res["message"]=[])
      setMessageDatabase((pre)=>res);
    })

  }, [])



  //connect to the websoket servers
  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    const stomp = Stomp.over(socket);
    stomp.connect({}, () => {
      console.log('WebSocket connected');
      setChatConnection(stomp);
    });

  }, [])


  // create the Rooms  
  const createRoom = (roomName) => {
    console.log("hellllo")
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(`http://localhost:8080/createroom/${roomName}`, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(data => {
        data.message=[];
        console.log(data);
        setMessageDatabase((pre)=>[...pre,data])
        setRooms((pre) => [...pre, data]);

      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });

  }

  useEffect(()=>{
    console.log(selectedRoom,"dfjdkfjsdlkfjsldkjflkdsjfkld");
    if(chatConnection){
      chatConnection.subscribe(`/topic/room/${selectedRoom}`, (message) => {
        let reslut=JSON.parse(message.body);
        console.log('Received message:', reslut);
       
          let newMessageDatabase=[...messageDatabase];
          newMessageDatabase.map((item)=>{

            if(item["roomName"]==reslut.roomName){
              let array= item["message"] || []
              array.push(reslut);
              item["message"]=array;
              
            }
            return item;
          })
         
          setMessageDatabase(newMessageDatabase);
        
      });
    }
  },[selectedRoom]);
    
  

  const sendMessage=(message)=>{
    if(chatConnection){
      chatConnection.send(`/app/room/${selectedRoom}`, {}, JSON.stringify({ messageId:0,content:message,senderName:user,roomName:selectedRoom }))
    }
    console.log("send Message Method",messageDatabase);
  }

  return (
    <AuthContext.Provider value={{ user, onclickSetUser, createRoom, messageDatabase ,hanlerSetSelectedRoom,selectedRoom,sendMessage}}>
      {children}
    </AuthContext.Provider>
  )
}

export default UserProvieer;