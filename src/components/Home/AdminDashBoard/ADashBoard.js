import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import useAuth from '../../../Hook/useAuth';
import Payment from '../../../payment/Payment';
import AddService from '../AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageAllOrder/ManageOrder';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Riveiw/Review';
// import ManageAllBooking from '../ManageAllBooking/ManageAllBooking';
// import MyBooking from '../MyBooking/MyBooking';

const ADashBoard = () => {
    const [control, setControl] = useState("allBooking");
    const [isAdmi, setIsAdmin] = useState(false);
    const { user, logout } = useAuth();

    useEffect(() => {
        fetch(`https://powerful-badlands-10709.herokuapp.com/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);
    console.log(isAdmi);

    return (
        <div>
            <Nav variant="tabs" className="justify-content-center text-dark" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link className="text-dark fw-bold" onClick={() => setControl("myOrder")}>MyOrder</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-dark fw-bold" onClick={() => setControl("Review")}>Review</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-dark fw-bold" onClick={() => setControl("pay")}>Pay</Nav.Link>
                </Nav.Item>
                {
                    isAdmi && (
                        <Nav.Item>
                            <Nav.Link className="text-dark fw-bold" onClick={() => setControl("makeAdmin")}>Make Admin</Nav.Link>
                        </Nav.Item>
                    )
                }
                {
                    isAdmi && (
                        <Nav.Item>
                            <Nav.Link className="text-dark fw-bold" onClick={() => setControl("allOrder")}>Manage all Order</Nav.Link>
                        </Nav.Item>
                    )
                }
                {
                    isAdmi && (
                        <Nav.Item>
                            <Nav.Link className="text-dark fw-bold" onClick={() => setControl("allEvents")}>All services</Nav.Link>
                        </Nav.Item>
                    )
                }
                {
                    isAdmi && (
                        <Nav.Item>
                            <Nav.Link className="text-dark fw-bold" onClick={() => setControl("addService")}>Add new service</Nav.Link>
                        </Nav.Item>
                    )
                }
            </Nav>
            <div className="col text-center  text-center">
                {control === "allOrder" && <ManageOrder></ManageOrder>}
                {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                {control === "addService" && <AddService></AddService>}
                {control === "Review" && <Review></Review>}
                {control === "myOrder" && <MyOrder></MyOrder>}
                {control === "pay" && <Payment></Payment>}
            </div>
        </div >
    );
};

export default ADashBoard;