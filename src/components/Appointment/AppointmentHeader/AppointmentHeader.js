import React from 'react';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




const AppointmentHeader = ({handleDateChange}) => {

    return (
        <main style={{ height: "600px" }} className='row d-flex align-items-center'>

            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: "#3a4256", fontWeight: "900" }}>Appointment</h1>
                <div>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>

            </div>

            <div className="col-md-6">
                <img src={chair} className='img-fluid' alt="" />
            </div>

        </main>
    );
};

export default AppointmentHeader;