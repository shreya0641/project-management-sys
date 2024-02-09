import React from 'react'
import { useState, useEffect} from 'react'

import './Login.css'

// import images here 
import logo from '../../images/logo.jpg'


const Login = () => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
            try {

                setLoading(true);

                const response = await fetch('http://localhost:3001/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });

                const data = await response.json();

                if (response.status === 200) {
                    window.location.href = '/home';
                    alert(data.message);
                } else if (response.status === 401) {
                    alert(data.message);
                } else if (response.status === 404) {
                    alert(data.message);
                } else {
                    alert('Internal server error');
                }

                setLoading(false);
                 
            } catch (error) {
                alert('Internal server error');
            } 
    }

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

  return (
        <div className="LoginComponent">
            {loading && <div className="Loader">Loading...</div>}
            <div className="LoginComponent-in">
                <div className="LoginComponent-in-in">
                    <div className="Login-in-one">
                        <div className="Login-one">
                            <div className="Login-one-in">
                                <div className="Login-one-one">
                                    <h1>Welcome Back</h1>
                                    <p>Login to get started</p>
                                </div>
                                <div className="Login-one-two">
                                    <div className="Login-one-two-in">
                                        <div className="Login-input-one">
                                            <input 
                                                type="text"
                                                placeholder='username'
                                                name='username'
                                                value={userData.username}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="Login-input-two">
                                            <input 
                                                type="password" 
                                                placeholder='password'
                                                name='password'
                                                value={userData.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="Login-input-three">
                                            <button onClick={handleSubmit}>Login</button>
                                        </div>
                                    </div>
                                    <div className="Login-one-two-in-in">
                                        <div className="Login-one-two-in-in-one">
                                            <div className="Login-cr-one">
                                                OR
                                            </div>
                                            <div className="Login-cr-two">
                                                <button>
                                                    Singup
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Login-two">
                             <img src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login