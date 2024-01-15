import Style from './profile.module.css'
import { PROFILE_USER } from '../../utils/graphql/querys/user/userProfile'
import { VERIFY_USER } from '../../utils/graphql/mutations/user/verifyUser';
import { useMutation, useQuery } from '@apollo/client';
import { jwtDecode } from 'jwt-decode';
import avatarDefault from '../../Assets/Img/avatar-default.jpg'
import LogoutButton from "../Logout/LogoutComponent";


const Profile = () =>  {

    // const id = "cf18ff2c-f57c-4501-bc43-d54582e1e93a"
    const token = localStorage.getItem('USER_INFO')
    const image = localStorage.getItem('USER_IMAGE')
    if (token) {
        var userInfo = jwtDecode(token);

    }
    // const [tokenMutation , {error, data}] = useMutation(VERIFY_USER);

    const { loading, error, data} = useQuery(PROFILE_USER)

    if (loading) return <span>loading...</span>
    if (error) return <span> error: {error.message}</span>

    // console.log(typeof(data) === Array)
    console.log(data)
    if(data && token) {
       var dataFilter= data.getAllUser.filter((p) => p.email === userInfo.email)
    }else{
        return <h1> No has iniciado sesion</h1>
    }

    return (
        <div className={Style.profileContainer}>
            {dataFilter ? <div className={Style.profileContenido}>
                <img
                    className={Style.profileImage}
                    src={image || avatarDefault} // Puedes agregar una imagen predeterminada
                    alt="avatar"
                />
                <h1>{dataFilter[0].userName}</h1>
                <span className={Style.spanProfile}>{dataFilter[0].email}</span>
                <br></br>
                {/* <span type="censored" class="censored" className={Style.spanProfile}>{dataFilter[0].passwordHash}</span> */}
                {/* <input type="password" value={dataFilter[0].passwordHash} disabled /> */}
                {/* <button type='button'>Editar Perfil</button>    */}
                <LogoutButton />
            </div>: <h1>No has iniciado sesion</h1>}
            {/* <h1>Profile</h1> */}
            {/* {console.log(dataFilter)} */}
            {/* {console.log(userInfo)} */}
        </div>  
    )
}

export default Profile