import './App.css'
import { Routes, Route} from 'react-router-dom'
import {Home, Login, Detail} from './Views/Index'



function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
