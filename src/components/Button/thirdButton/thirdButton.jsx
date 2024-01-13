import Style from './thirdButton.module.css'
import { useNavigate, useLocation } from 'react-router-dom'

export default function ThirdButton({ text, type, navigate, style }) {
    const navigateClick = useNavigate()
    const location = useLocation().pathname
    
    return <div className={Style.button_container}>
        <button 
          className={`${location.includes(navigate)
            ? Style.button_active
            : Style.button}`} 
          onClick={() => navigateClick(navigate)} 
          type={type}
          style={style}>{text}</button>
    </div>
}