import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../Hook/useFirebase';
import './Review.css'

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { user } = useFirebase();
    const onSubmit = (data) => {
        fetch("https://powerful-badlands-10709.herokuapp.com/addSReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        console.log(data);
    };
    return (
        <div>
            <div class="registration-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Review</h1>
                    <div class="form-group">
                        <input class="form-control item" name="email"
                            value={user?.email}
                            type="email"
                            {...register("email", { required: true })} />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" name="comments"
                            placeholder="Comments"
                            {...register("comments", { required: true })} />
                    </div>
                    <div class="form-group">
                        <input class="form-control item" name="rating"
                            placeholder="Rating outof 5"
                            type='number'
                            max="5"
                            {...register("rating", { required: true })} />
                    </div>
                    {/* <div class="form-group">
                        <input type="text" class="form-control item" id="phone-number" placeholder="Phone Number" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="birth-date" placeholder="Birth Date" />
                    </div> */}
                    <div class="form-group">
                        <input type="submit"
                            value="Submit" class="btn btn-block create-account"></input>
                    </div>
                </form>
                {/* <div class="social-media">
                    <h5>Sign up with social media</h5>
                    <div class="social-icons">
                        <a href="#"><i class="icon-social-facebook" title="Facebook"></i></a>
                        <a href="#"><i class="icon-social-google" title="Google"></i></a>
                        <a href="#"><i class="icon-social-twitter" title="Twitter"></i></a>
                    </div>
                </div> */}
            </div>

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="email"
                    value={user?.email}
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="rating"
                    placeholder="Rating outof 5"
                    type='number'
                    max="5"
                    {...register("rating", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="Register"
                />
            </form> */}
        </div>
    );
};

export default Review;