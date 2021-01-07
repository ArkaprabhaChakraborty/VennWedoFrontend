import React from 'react';
import {ReactComponent as Logo} from './Logo.svg';
import './Login.css';
import {ReactComponent as SignInLogo} from './Signin.svg';
import Polygon from './../Polygons/Polygon';
import {FacebookLoginButton, GoogleLoginButton, TwitterLoginButton} from 'react-social-login-buttons';
const Login = ()=>{
    return(
        <div>
        <div className="Login">    
        <div className="login_body">
            <div className="Logo">
                <Logo/>
            </div>
        </div>
        <div className="rectangle">
            <div className="signin">
                <div className="signinlogo">
                    <SignInLogo/>
                </div>
                <div className="facebook">
                    <FacebookLoginButton align={"center"} iconSize={45} size={65}/>
                </div>
                <div className="twitter">
                    <TwitterLoginButton align={"center"} iconSize={45} size={65}/>
                </div>
                <div className="google">
                    <GoogleLoginButton align={"center"} iconSize={45} size={65}/>
                </div>
                <div className="signup">
                Not a member yet? <div className="signup_color"> Sign Up</div>
                </div>
            </div>
        </div>
        <Polygon/>
        </div>
        </div>
    );
}
export default Login;