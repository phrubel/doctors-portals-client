import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';







const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className='list-unstyled'>
                <li>
                    <Link to='/dashboard'>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard/appointment'>
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                    </Link>
                </li>
                <li>
                    <Link to='/patients'>
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to='/prescription'>
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescription</span>
                    </Link>
                </li>
                <li>
                    <Link to='/settings'>
                        <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to=''>
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Log Out</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;