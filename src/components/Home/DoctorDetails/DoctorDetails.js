import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';




const DoctorDetails = (props) => {
    const {name,phone,img}=props.doctor
    return (
        <div className="col-md-4 text-center">
        <img className="img-fluid mb-3" src={img} alt=""/>
        <h4 className='text-danger'>{name}</h4>
        <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +{phone}</p>
    </div>
    );
};

export default DoctorDetails;