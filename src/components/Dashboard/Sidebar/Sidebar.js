import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';







const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useState(UserContext)
    const [isDoctor, setIsDoctor] = useState(false)


    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className='list-unstyled'>
                <li>
                    <Link to='/dashboard'>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>

                {isDoctor && <div>
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
                        <Link to='/addDoctor'>
                            <FontAwesomeIcon icon={faUsers} /> <span>Add Doctor</span>
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
                </div>}
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