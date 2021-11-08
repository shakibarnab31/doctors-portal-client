import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Mission from '../Mission/Mission';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Mission></Mission>
            <AppointmentBanner></AppointmentBanner>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;