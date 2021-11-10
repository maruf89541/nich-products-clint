import React from 'react';
import AddService from '../AddService';
import Banner from '../Banner/Banner';
import MainPd from '../Mainpd/MainPd';
import Services from '../Services/Services';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MainPd></MainPd>
            <Services></Services>
            <AddService></AddService>
        </div>
    );
};

export default Home;