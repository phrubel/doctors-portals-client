import React from 'react';
import './TestimonialsDetails.css'





const TestimonialsDetails = (props) => {
    const { describe, name, img, address } = props.testimonial

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center text-justify">{describe}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60" />
                <div>
                    <h6 style={{ color: "#1cc7c1" }}>{name}</h6>
                    <p className="m-0">{address}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsDetails;