import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';




const DoctorDetails = (props) => {
    const {name,email,img}=props.doctor
    return (
        <div className="col-md-4 text-center">
      
        <img className="img-fluid mb-3" style={{height:"200px",weigh:"150px"}} src={img} alt=""/>
    <p>{email}</p>
        <h4 className='text-danger'>{name}</h4>
        <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +12548678785</p>
    </div>
    );
};

export default DoctorDetails;