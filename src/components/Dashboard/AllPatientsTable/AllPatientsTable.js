import React from 'react';



const AllPatientsTable = ({ appointments}) => {

    return (
        <table class='table shadow'>
              <thead>
                <tr>
                    <th className='text-secondary' scope="col">Sr.No</th>
                    <th className='text-secondary' scope="col">Name</th>
                    <th className='text-secondary' scope="col">Gender</th>
                    <th className='text-secondary' scope="col">Age</th>
                    <th className='text-secondary' scope="col">Weight</th>
                    <th className='text-secondary' scope="col">Date</th>
                    <th className='text-secondary' scope="col">Phone</th>
                    <th className='text-secondary' scope="col">Email</th>
                </tr>
            </thead>
            <tbody>

                {
                    appointments.map((appointment,index) =>
                        <tr>
                            <td>{index+1}</td>
                            <td>{appointment.name}</td>
                            <td>{appointment.gender}</td>
                            <td>{appointment.age}</td>
                            <td>{appointment.weight}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.email}</td>
                        </tr>

                    )
                }


            </tbody>
        </table>
    );
};

export default AllPatientsTable;