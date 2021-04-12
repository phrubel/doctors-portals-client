import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import Whitening from '../../../images/whitening.png'
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: Whitening
    }
]

const Services = () => {
    return (
        <section className='services-container mt-5'>
            <div className='text-center'>
                <h5 style={{ color: "#1cc7c1", fontWeight: "600" }}>OUR SERVICESS</h5>
                <h3 style={{ color: "#3a4256", fontWeight: "700" }}>Services We Provide</h3>
            </div>

            <div className='d-flex justify-content-center'>
                <div className='row w-75 mt-5 pt-5'>
                    {
                        serviceData.map(service => <ServicesDetails service={service}></ServicesDetails>)
                    }
                </div>
            </div>


        </section>
    );
};

export default Services;