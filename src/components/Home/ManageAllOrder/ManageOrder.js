import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [myBooking, setMyBooking] = useState([]);
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch(`https://powerful-badlands-10709.herokuapp.com/myEvents`)
            .then((res) => res.json())
            .then((data) => setMyBooking(data));
    }, [control]);


    const handleDelete = (id) => {
        fetch(`https://powerful-badlands-10709.herokuapp.com/myEvents/${id}`, {
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

    console.log(myBooking);
    console.log(myBooking);
    return (
        <div>
            <h1>My evtns : {myBooking.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>City_name</th>
                        <th>Addresse</th>
                    </tr>
                </thead>
                {myBooking?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.Name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.date}</td>
                            <td>{pd?.city_name}</td>
                            <td>{pd?.addrese}</td>
                            <button onClick={() => handleDelete(pd._id)}
                                className="btn bg-danger p-2">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageOrder;