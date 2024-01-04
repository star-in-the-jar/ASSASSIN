
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login_User from './Login_user'
import Login_Hospital from './Login_Hospital'

function App() {

  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

  fetch('https://jsonplaceholder.typicode.com/users/2')
      .then(res => res.json())
      .then(j => console.log(j))

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="login" element={<Login_User />}/>
      <Route path="login-hos" element={<Login_Hospital />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
