import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import AddService from '../AddService';
import ManageAllBooking from '../ManageAllBooking/ManageAllBooking';
import MyBooking from '../MyBooking/MyBooking';

const ADashBoard = () => {
    const [control, setControl] = useState("allBooking");

    return (
        <div>
            <Nav variant="tabs" className="justify-content-center" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={() => setControl("allBooking")}>Manage all Booking</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setControl("allEvents")}>All services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setControl("addService")}>Add new service</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="col text-center  text-center">
                {control === "allBooking" && <ManageAllBooking></ManageAllBooking>}
                {control === "allEvents" && <MyBooking></MyBooking>}
                {control === "addService" && <AddService></AddService>}
            </div>
        </div >
    );
};

export default ADashBoard;