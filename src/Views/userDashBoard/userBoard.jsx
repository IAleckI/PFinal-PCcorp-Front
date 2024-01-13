import Style from './userBoard.module.css'
import Profile from '../../components/profile/profile';
import Orders from '../../components/orders/orders';
import ConfigAccount from '../../components/configAccount/configAccount';
import Footer from '../../components/Footer/footer';
import NavBar from '../../components/NavBar/navBar'
import UserNav from '../../components/userNav/userNav';
import { useParams, Navigate } from 'react-router-dom'

export default function UserBoard() {
    const { id } = useParams();
    const locationRender = () => {
      switch (id) {
        case 'profile':
          return <Profile/>;
        case 'config':
            return <ConfigAccount/>;
        case 'orders':
            return <Orders/>;
        default:
          return <Navigate to="/account/profile"/>;
      }
    }
    return (
        <div className={Style.userBoard}>
          <NavBar/>
          <UserNav/>
          {locationRender()}
          <Footer/>
        </div>
    )
}