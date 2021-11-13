import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../Hook/useAuth';

const Detailes = () => {
    const { serviceId } = useParams()
    const [allServiceDetails, setEmployeesDetails] = useState([]);
    const { user } = useAuth()

    const [singleServiceDetailes, setSingleEmployee] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://powerful-badlands-10709.herokuapp.com/booking', data)
            .then(res => {
                console.log(res);
                reset();
            })
        reset();
    }

    //  data load howa
    useEffect(() => {
        fetch("https://powerful-badlands-10709.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setEmployeesDetails(data));
    }, []);

    // call hbe jokon amar shob data load hye state e set hbe
    useEffect(() => {
        const foundEmployee = allServiceDetails.find(
            (employee) => employee._id === serviceId
        );
        setSingleEmployee(foundEmployee);
    }, [allServiceDetails]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 p-5"><img className="img-fluid" src={singleServiceDetailes?.img} alt=""></img>
                    <h3>{singleServiceDetailes?.name}</h3>
                    <p>{singleServiceDetailes?.description}</p>
                </div>
                <div className="col-lg-6 p-5  ">
                    <div className="add-service">
                        <h3 className="text-center">Add Your <span>Information</span></h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
                            <input {...register("city_name", { required: true, maxLength: 20 })} defaultValue={singleServiceDetailes?.name} placeholder="city_name" />
                            <textarea {...register("addrese")} placeholder="Addresse" />
                            <input {...register("email")} placeholder="email" defaultValue={user?.email} />
                            <input type="date" {...register("date")} placeholder="date"
                                min="2020-01-01" max="2022-12-31" />
                            <input {...register("img")} placeholder="image-uri" defaultValue={singleServiceDetailes?.img} readOnly />
                            <button className="regular-btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Detailes;