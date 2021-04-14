import React, { useContext, useEffect } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { UserContext } from '../../../App';


const Dashboard = () => {
    const [loggedInUser,setLoogedInUser]=useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])

    const handleDateChange = date => {
        setSelectedDate(date)
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify({ date: selectedDate,email:loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })

    }, [selectedDate])




    return (
        <div style={{ backgroundColor: "#F4FDFB", height: "100%" }} className='container-fluid row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-5 mt-5 d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>

            <div className="col-md-5">
                <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
            </div>
        </div>
    );
};

export default Dashboard;