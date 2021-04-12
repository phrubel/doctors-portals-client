import React from 'react';

const AppointmentsList = ({ appointments }) => {

    return (
        <table class="table shadow">
            <thead>
                <tr>
                    <th className='text-secondary' scope="col">Name</th>
                    <th className='text-secondary' scope="col">Phone</th>
                    <th className='text-secondary' scope="col">Email</th>
                </tr>
            </thead>
            <tbody>

                {
                    appointments.map(appointment =>
                        <tr>
                            <td>{appointment.name}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.email}</td>
                        </tr>

                    )
                }


            </tbody>
        </table>
    );
};

export default AppointmentsList;