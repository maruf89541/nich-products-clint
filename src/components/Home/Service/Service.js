import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    const { _id, img, name, short_d, price, day, location, description } = service;
    console.log(_id);
    return (
        <div className="col-md-4">
            {/* <div className="p-3">
                <img src={img} className="img-fluid" alt=""></img>
            </div>
            <div className="p-3">
                <h5 text-center>{name}</h5>
                <h5 className="fs-bold" style={{ color: "#ff7c5b" }}>$ {price} <small className="fs-6 mb-3" style={{ color: "gray" }}> / per persone</small></h5>
                <h6 className="my-3 p-3" style={{ color: "gray", backgroundColor: "#e8eaed", borderRadius: "5px" }}>     <i className="far fa-clock"></i> {day} Day | <i className="far fa-map"></i> {location}</h6>
                <p>{short_d}</p>
                <p>{description}</p> */}

            <div className="product-wrapper mb-45 text-center">
                <div className="product-img"> <a href="#" data-abc="true"> <img src={img} alt="" /> </a> <span className="text-center fw-bold"> $ {price}</span>
                    <div className="product-action">
                        <h5 text-center className="text-primary fw-bold">{name}</h5>
                        <div className="product-action-style"> <a href="#"> <i className="fa fa-plus"></i> </a> <a href="#"> <i className="fa fa-heart"></i> </a>
                            <Link to={`/detailes/${_id}`}>
                                <i className="fa fa-shopping-cart"></i>
                            </Link> </div>
                    </div>
                </div>
            </div>
        </div >

        // </div >



    );
};

export default Service;