import Style from "./login.module.css";
import { useGoogle } from "../../utils/hooks/network/google/useGoogle";
import { useFacebook } from "../../utils/hooks/network/facebook/useFacebook";
import LoginData from "./loginData/loginData";
import GoogleLogin from "react-google-login";
import swal from "sweetalert";

export default function LoginTemplate() {
  const clientId = useGoogle()
  const {onFailure, onSuccess} = useGoogle()

  return (
    <div className={Style.login}>
      <section className={Style.template}>
        <div className={Style.login_template}>
          <h1>Login in to Make My PC app</h1>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            className={Style.login_google_button}
          />

          <div className={Style.login_middle} />
          <LoginData />
        </div>
      </section>
    </div>
  );
}
