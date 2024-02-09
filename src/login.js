import React from 'react'
import logo from './images/logo.jpg'

const popupwindowstyle={width:'300px',height:'450px', background:'white'};
const logostyle={width:'75px',height:'75px', position:'absolute', left:'115px', top: '10px'};
const logodivstyle={height: '100px'}
const space={height:'10px'}
function Login(){
    return(
        <div className='full-height'>
            <div id='header' className='loginheader'> ACADEMIC PROJECT MANAGEMENT SYSTEM</div>
            <div id='content' className='logincontent'>
                <div id='popup' className='popup'>
                    <div id='popupwindow' className='popupwindow' style={popupwindowstyle} >
                        <div className='loginstyle1'>Login</div>
                        <div className='loginstyle2'>
                            <div style={logodivstyle}>
                                <img src={logo} alt='' style={logostyle} />
                            </div>
                            <div>Username*</div>
                            <div><input type='text' id='T1' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Password*</div>
                            <div><input type='password' id='T2' className='txtbox' /></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div><button className='btn'>Sign In</button></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id='footer' className='loginfooter'> </div>
        </div>
    );
}

export default Login;