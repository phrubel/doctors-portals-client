import React from 'react';
import Blogs from '../Blogs/Blogs';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurDoctor from '../OurDoctor/OurDoctor';
import Services from '../Servicess/Services';
import Testimonials from '../Testimonials/Testimonials';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <FeatureService></FeatureService>
           <MakeAppointment></MakeAppointment>
           <Testimonials></Testimonials>
           <Blogs></Blogs>
           <OurDoctor></OurDoctor>
           <ContactUs></ContactUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;