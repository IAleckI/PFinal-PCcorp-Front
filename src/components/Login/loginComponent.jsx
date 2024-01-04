import Style from "./loginComponent.module.css";
import { useGoogle } from "../../utils/hooks/network/google/useGoogle";
import { useFacebook } from "../../utils/hooks/network/facebook/useFacebook";
import { Link } from "react-router-dom";
import LoginData from "./loginData/loginData";
import GoogleLogin from "react-google-login";
import ReactFacebookLogin from "react-facebook-login";

export default function LoginComponent() {
  const clientId = useGoogle();
  const { fbId, success, error } = useFacebook();

  return (
    <div className={Style.box}>
      <form className={Style.formContainer} onSubmit={handleFormSubmit}>
        <label className={Style.label} htmlFor="email">
          Email
        </label>
        <input
          className={Style.input}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label className={Style.label} htmlFor="password">
          Password
        </label>
        <input
          className={Style.input}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit" className={Style.button}>
          Login
        </button>
        <div className={Style.google}>
          <GoogleLogin
            clientId={clientID}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div className={Style.facebook}>
          <FacebookLogin
            appId={facebookAppID}
            autoLoad={false}
            fields="name,email,picture"
            callback={facebookResponse}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                className={Style.facebookButton}
              >
                Login with Facebook
              </button>
            )}
          />
          <div className={Style.login_middle} />
          <LoginData />
        </div>

        <p className={Style.signin}>
          ¿You dont have an account yet? <a href="/register"> Sign In!</a>{" "}
        </p>

        <button className={Style.button} onClick={() => window.history.back()}>
          go back
        </button>
      </form>
      <LogoutButton className={Style.button} />
    </div>
  );
}
