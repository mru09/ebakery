import React, { useState, useEffect , useReducer, useContext} from 'react';

import './Login.css';
import { AuthContext } from '../authHandle/AuthContext';

const usernameReducer = (state, action) => {
    if(action.type === "Input")
        return {value: action.value , isValid: action.value.includes("@")};
    else if(action.type === "blur")
        return {value: state.value , isValid: state.value.includes("@")};
    
    return {value: "" , isValid: false};
};

const passwordReducer = (state, action) => {
    if(action.type === "Input")
        return {value: action.value , isValid: action.value.length >= 8 };
    else if(action.type === "blur")
        return {value: state.value , isValid: state.value.length >= 8 };
    
    return {value: "" , isValid: false};
};

const Login = (props) => {

    const onLogging = useContext(AuthContext).onLogging;
    const onHideLoginForm = useContext(AuthContext).onHideLoginForm;

    const [username, setUsername] = useReducer(usernameReducer, 
        {value: "" , isValid: "false"});

    const [password, setPassword] =  useReducer(passwordReducer, 
        {value: "" , isValid: "false"});

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const formValidationTimer = setTimeout(() => {
            setFormValid(username.isValid === true && password.isValid === true);
        }, 500);
       
        return(() => {
            clearTimeout(formValidationTimer);
        })
    } , [username.isValid, password.isValid]);

    const onUsernameChange = (event) => {
        setUsername({type: "Input", value: event.target.value});
    };

    const onPasswordChange = (event) => {
        setPassword({type: "Input", value: event.target.value});
    };

    const onLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('isLogged','1');
        onHideLoginForm();
        onLogging(true);
    };

    return (
        <form onSubmit={onLogin} className='loginContainer'>
            <label>Email</label>
            <input className={username.isValid ? "" : "error"} type='text' onChange={onUsernameChange}></input>
            {username.isValid ? "" : "error" && <p> email must contain '@'</p>}
            <label>Password</label>
            <input className={password.isValid ? "" : "error"} type='password' onChange={onPasswordChange}></input>
            {password.isValid ? "" : "error" && <p> password must be 8 character long</p>}
            <button className={formValid ? "" : "disabled"} type='submit'>LOGIN</button>
        </form>
    );
  }
  
  export default Login;
  