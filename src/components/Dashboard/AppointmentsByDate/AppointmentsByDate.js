import React from 'react';
import AppointmentsList from '../AppointmentsList/AppointmentsList';




const AppointmentsByDate = ({appointments}) => {

    return (
        <div className='mt-5'> 
            <h2 className='text-center text-primary'>Appointment</h2>


            {
                appointments.length ?
                <AppointmentsList appointments={appointments}></AppointmentsList>
                :
                <div className='p-5'>
                        <h5 className='text-center text-secondary'>No,Appointments in this Day,keep Rest...!!!</h5>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;