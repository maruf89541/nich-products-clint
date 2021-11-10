import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'






const AddService = () => {

    const { register, handleSubmit, reset } = useForm();



    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
                reset();
            })
        reset();
    }
    return (
        <div className="container">
            <div className="add-service">
                <h1>Add <span style={{ color: "#ff7c5b" }}>Service</span> </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <div class="form-floating mb-3">
                        <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" class="form-control" id="floatingInput" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="number" {...register("price")} placeholder="Price" class="form-control" id="floatingPassword" />
                        <label for="floatingPassword">Password</label>
                    </div> */}
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("description")} placeholder="description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("day")} placeholder="Day" />
                    <input {...register("location")} placeholder="Location" />
                    <input {...register("review")} placeholder="Review" />
                    <input {...register("img")} placeholder="image-uri" />
                    <button className="regular-btn" type="submit">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default AddService;