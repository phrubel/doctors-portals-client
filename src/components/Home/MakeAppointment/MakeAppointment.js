import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'



const MakeAppointment = () => {
    return (
        <section className='make-appiontment'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img className='img-fluid' src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className='text-primary'>APPOINTMENT</h5>
                        <h1 className='my-4'>Make An Appointment <br/>Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae doloremque tenetur repellat voluptatum, molestiae enim. Tempore quaerat odio consequatur!</p>
                        <button className='btn btn-success'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;