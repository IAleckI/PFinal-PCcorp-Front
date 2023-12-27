import './App.css'
import {Link, Routes, Route} from 'react-router-dom'



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
