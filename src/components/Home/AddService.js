import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'






const AddService = () => {

    const { register, handleSubmit, reset } = useForm();



    const onSubmit = data => {
        console.log(data);
        axios.post('https://powerful-badlands-10709.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
                reset();
            })
        reset();
    }
    return (
        <div className="container">
            <div class="registration-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Add New Service</h1>
                    <div class="form-group">
                        <input class="form-control item" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <textarea type="text" class="form-control item" {...register("description")} placeholder="description" />
                    </div>
                    <div class="form-group">
                        <input class="form-control item" name="price"
                            type='number'
                            {...register("price")} placeholder="Price" />
                    </div>
                    <div class="form-group">
                        <input class="form-control item" {...register("img")} placeholder="image-uri" />
                    </div>
                    <div class="form-group">
                        <input type="submit"
                            value="Submit" class="btn btn-block create-account"></input>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddService;