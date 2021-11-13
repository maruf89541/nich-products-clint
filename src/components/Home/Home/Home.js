import React, { useEffect, useState } from 'react';
import AddService from '../AddService';
import Banner from '../Banner/Banner';
import MainPd from '../Mainpd/MainPd';
import Review from '../Riveiw/Review';
import Service from '../Service/Service';
import Services from '../Services/Services';




const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://powerful-badlands-10709.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <MainPd></MainPd>
            <div className="container" >
                <h1 className="text-center my-5">This week<span style={{ color: "#ff7c5b" }} >Populer</span></h1>
                <div className="row gy-3 " >
                    {

                        services.slice(0, 6)?.map(service => <Service
                            key={service.id}
                            service={service}

                        ></Service>)
                    }
                </div >
            </div>
            <Review></Review>
        </div>
    );
};

export default Home;