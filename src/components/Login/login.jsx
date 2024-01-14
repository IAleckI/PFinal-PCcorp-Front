import Style from './login.module.css';
import { useGoogle } from '../../utils/hooks/network/google/useGoogle';
import { useFacebook } from '../../utils/hooks/network/facebook/useFacebook';
import LoginData from './loginData/loginData';
import GoogleLogin from 'react-google-login';

import loginImage from '../../Assets/Img/fotologin.jpg'; // Import the image

export default function LoginTemplate() {
  const clientId = useGoogle();
  const { onFailure, onSuccess } = useGoogle();

  return (
    <div className={Style.login}>
      <section className={Style.template}>
        <div className={Style.login_template}>
          <h1>LOGIN</h1>
          <LoginData />
          <div className={Style.login_middle} />

          <div className={Style.login_divider_text}>
            O puedes iniciar sesión con:
          </div>


          <div className={Style.login_buttons}>
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              className={Style.login_google_button}
            />

            <div className={Style.login_facebook_button}>
              Facebook
            </div>
          </div>
        </div>

        <div className={Style.image_container}>
          <img
            src={loginImage}
            alt="Login Background"
            className={Style.login_image}
          />
        </div>
      </section>
    </div>
  );
}