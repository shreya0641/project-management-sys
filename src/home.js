import React from 'react'
import './home.css'


// imports start here
import Sidebar from './Sidebar'
import { IoMdNotificationsOutline } from "react-icons/io";

import Profile from './images/Profile.jpg'


// imports images here

const Student = () => {

    const handleLogout = () => {
        window.location.href = '/auth/login';
    }


  return (
        <div className="StudentComponent">
            <div className="StudentComponent-in">
                 <div className="StudentComponent-in-in">
                    <div className="Student-sidebar">
                        <div className="Student-sidebar-in">
                            <Sidebar />
                        </div>
                    </div>

                    <div className="StudentHome">
                        <div className="StudentHome-in">   

                            <div className="S-home-one">
                                <div className="S-home-one-in">
                                     <div className="S-h-o-one">
                                        <input type="text" placeholder='Search'/>
                                     </div>
                                     <div className="S-h-o-two">
                                        <div className="S-h-o-two-icon">
                                            <IoMdNotificationsOutline className='Notification-icon'/>
                                        </div>
                                        <div className="S-h-o-two-id">
                                            <p>2200030651</p>
                                        </div>
                                        <div className="S-h-o-two-image">
                                            <img src={Profile} alt="Profile" />
                                        </div>
                                        <div className="S-h-o-two-logout">
                                            <p onClick={handleLogout}>Logout</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            
                            <div className="S-home-two">
                                <div className="S-home-two-in">
                                    <div className="S-home-stats">
                                        <div className="S-home-stats-one">
                                            <div className="S-home-stats-one-p">
                                                <p>Overview</p>
                                            </div>
                                            <div className="S-home-stats-one-graph">
                                                <div className="S-home-Stat-one">

                                                </div>
                                                <div className="S-home-Stat-two">
                                                
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="S-home-stats-two">
                                            {/* <h1>two</h1> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Student