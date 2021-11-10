import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    const { _id, img, name, short_d, price, day, location, description } = service;
    console.log(_id);
    return (
        <div className="col-lg-4 px-3 hello mx-auto service " >
            <div className="p-3">
                <img src={img} className="img-fluid" alt=""></img>
            </div>
            <div className="p-3">
                <h5 text-center>{name}</h5>
                <h5 className="fs-bold" style={{ color: "#ff7c5b" }}>$ {price} <small className="fs-6 mb-3" style={{ color: "gray" }}> / per persone</small></h5>
                <h6 className="my-3 p-3" style={{ color: "gray", backgroundColor: "#e8eaed", borderRadius: "5px" }}>     <i class="far fa-clock"></i> {day} Day | <i class="far fa-map"></i> {location}</h6>
                <p>{short_d}</p>
                <p>{description}</p>


                <Link to={`/detailes/${_id}`}>
                    <button className="btn btn-dark regular-btn ">
                        BooKing Now
                    </button>
                </Link>
            </div>

        </div >



    );
};

export default Service;