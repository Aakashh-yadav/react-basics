
import './App.css'
import Profle from './Components/Login'
import Login from './Components/Profle'
import UserContextProvder from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvder>
        {/* <h1>Hello Bhai kya haal hai</h1> */}
        <Profle/>
        <Login/>
    </UserContextProvder>
  )
}

export default App
