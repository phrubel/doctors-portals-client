import React from 'react';
import ryan from '../../../images/ryan.png'
import eliza from '../../../images/eliza.png'
import cristina from '../../../images/cristina.png'
import TestimonialsDetails from '../TestimonialsDetails/TestimonialsDetails';


const testimonalData = [
    {
        describe: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni veritatis, possimus, ullam quia sit sunt quasi autem, est libero unde officiis vero rem reiciendis.',
        name: 'David Ryan',
        img: ryan,
        address: 'North Decota'
    },
    {
        describe: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni veritatis, possimus, ullam quia sit sunt quasi autem, est libero unde officiis vero rem reiciendis.',
        name: 'Eliza Styen',
        img: eliza,
        address: 'California'
    },
    {
        describe: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni veritatis, possimus, ullam quia sit sunt quasi autem, est libero unde officiis vero rem reiciendis.',
        name: 'Cristina Lobby',
        img: cristina,
        address: 'Chikago'
    }
]


const Testimonials = () => {
    return (

        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h5 className="text-primary text-uppercase">Testimonial</h5>
                <h1>What's Our Patients <br/> Says </h1>
            </div>
            <div className="card-deck mt-5">
                 {
                     testimonalData.map(testimonial => <TestimonialsDetails testimonial={testimonial} key={testimonial.name}/>)
                 }
             </div>
        </div>
    </section>

    );
};

export default Testimonials;