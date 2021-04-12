import React from 'react';
import chair from '../../../images/chair.png'



const HeaderMain = () => {
    return (
        <main style={{ height: "600px" }} className='row d-flex align-items-center'>

            <div className="col-md-4 offset-md-1">
                <h1 style={{color:"#3a4256",fontWeight:"900"}}>Your New Smile <br /> Starts Here</h1>
                <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cupiditate.Perspiciatis officiis impedit iure ea cupiditate.</p>
                <button className="btn btn-brand">Get Appointment</button>
            </div>

            <div className="col-md-6">
                <img src={chair} className='img-fluid' alt="" />
            </div>

        </main>
    );
};

export default HeaderMain;