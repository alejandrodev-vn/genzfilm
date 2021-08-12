import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'
Login.propTypes = {
    
};
const initialState = {
    username:'',
    password:'',
}
function Login() {
    const [ userInfo, setUserInfo ] = useState(initialState)
    const { handleLogin, isLogged } = useContext(AuthContext)
    if(isLogged) return <Redirect to="/genzfilm" />
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formValues = {
            username: userInfo.username,
            password: userInfo.password,
        }
        console.log(formValues)
        handleLogin()
        setUserInfo(initialState)
    }
    const handleValueChange = (e) => {
        const { name, value } = e.target
        setUserInfo({...userInfo, [name]: value})
    }
    return (
        <div className="container pt-3">
            <h1 className="title text-md-center">Đăng nhập</h1>
            <form onSubmit={handleSubmit} style={{width: '50%', margin: '0 auto'}}>
                <div className="form-group">
                    <label>Tài khoản: </label>
                    <input type="text" name="username" onChange={handleValueChange} value={userInfo.username} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Mật khẩu: </label>
                    <input type="password" name="password" onChange={handleValueChange} value={userInfo.password} className="form-control" />
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Đăng nhập"/> 
            </form>
        </div>
       
    );
}

export default Login;