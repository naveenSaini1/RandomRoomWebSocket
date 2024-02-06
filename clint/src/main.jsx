import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserProvieer from './store/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvieer>
    <App />
  </UserProvieer>

)
