import React from 'react';
import doctor from '../../../images/doctor.png'
import DoctorDetails from '../DoctorDetails/DoctorDetails';



const doctorData=[
    {
        img:doctor,
        name:'Dr. P.H.Rubel',
        phone:+125478575
    },
    {
        img:doctor,
        name:'Dr. P.H.Rubel',
        phone:+1985478575
    },
    {
        img:doctor,
        name:'Dr. P.H.Rubel',
        phone:+1254888575
    },
]



const OurDoctor = () => {
    return (
        <section className="mt-5">
            <div className="container">
                <div className="text-center">
                    <h5 style={{ color: "#1cc7c1",fontWeight:"700",fontSize:"25px" }}>OUR DOCTOR</h5>
                </div>
                <div className=" card-deck mt-5">
                    {
                        doctorData.map(doctor=> <DoctorDetails doctor={doctor} key={doctor.phone}></DoctorDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurDoctor;