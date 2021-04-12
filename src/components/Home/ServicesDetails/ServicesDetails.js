import React from 'react';

const ServicesDetails = (props) => {
    const { name, img } = props.service

    return (
        <div className='col-md-4 text-center'>
            <img style={{ height: "65px" }} src={img} alt="" />
            <h5 className="mt-3 mb-3 text-secondary">{name}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, distinctio.</p>
        </div>
    );
};

export default ServicesDetails;