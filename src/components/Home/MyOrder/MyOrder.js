import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';
import './MyOrder.css'
const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch(`https://powerful-badlands-10709.herokuapp.com/myEvents/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyOrder(data));
    }, [user.email], [control]);


    const handleDelete = (id) => {
        fetch(`https://thawing-reef-26997.herokuapp.com/myEvents/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                } else {
                    setControl(false);
                }
            });
        console.log(id);
    };

    console.log(myOrder);
    console.log(myOrder);
    return (
        <div className="row">
            <h1>My Order : {myOrder.length}</h1>
            {myOrder?.map((pd) => (
                <div class=" col-3 container  position-relative ">
                    <div class=" card d-flex position-relative flex-column">
                        <div class='imgContainer'> <img src={pd.img} /> </div>
                        <div class="content">
                            <h2>{pd.city_name}</h2>
                            <p> Your trip date{pd.date}</p>
                            <p>Your tikit delivere to : {pd.addrese}</p>
                            <button onClick={() => handleDelete(pd._id)}
                                className="btn bg-danger p-2">Delete</button>
                        </div>
                    </div>
                </div>


            ))}

        </div >
    );
};

export default MyOrder;