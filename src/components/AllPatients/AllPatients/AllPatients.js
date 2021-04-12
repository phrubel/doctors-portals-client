import React, { useEffect, useState } from 'react';
import AllPatientsTable from '../../Dashboard/AllPatientsTable/AllPatientsTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [appointments, setAppointments]=useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/appointments')
        .then(res=> res.json())
        .then(data=>setAppointments(data))
    },[])

    return (
        <div className='row container-fluid'>
            <Sidebar></Sidebar>
            <div className='col-md-10 p-4 pr-5' style={{position:"absolute"}}>
                <h4 className='text-brand'>All Patients</h4>
            <AllPatientsTable appointments={appointments}></AllPatientsTable>
            </div>
        </div>
    );
};

export default AllPatients;