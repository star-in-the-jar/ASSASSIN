
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import LoginUser from './LoginUser'
import LoginHospital from './LoginHospital'
import UiInput from './components/ui/UiInput.jsx';

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
    <Route
          exact
          path="/"
          element={
            <div>
              <UiInput label="input:" placeholder="Input" />
            </div>
          }
        />
      <Route path="login" element={<LoginUser />}/>
      <Route path="login-hos" element={<LoginHospital />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
