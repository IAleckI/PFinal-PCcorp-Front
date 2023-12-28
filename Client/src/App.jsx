import style from './App.module.css'
import { Route, Routes} from 'react-router-dom'
import Login from './components/Login/Login'

function App() {

  return (
    <div  className={style.app}>
        <Routes>
    <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  )
}

export default App
