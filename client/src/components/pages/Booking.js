import React, { useState } from "react";
import { Container, Form, Card, ListGroup } from "react-bootstrap";
import bgImage from "../../assets/BookingBG.jpeg";
import StripeReturn from '../StripeReturn'

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        checkIn: '',
        checkOut: '',
        canoeQuantity: 0,
        lifejacket: 0,
        extraPaddles: 0,
        insurance: false
    });

    const [priceDetails, setPriceDetails] = useState({
        canoes: 0,
        lifejacket: 0,
        extraPaddles: 0,
        insurance: 0,
        total: 0
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData(prevState => ({ ...prevState, [e.target.name]: value }));

        let newPriceDetails = { ...priceDetails };
        if (e.target.name === 'canoeQuantity') {
            newPriceDetails.canoes = calculateCanoePrice(value, formData.checkIn, formData.checkOut);
        } else if (e.target.name === 'lifejacket') {
            newPriceDetails.lifejacket = calculateDailyCost(value, formData.checkIn, formData.checkOut, 10);
        } else if (e.target.name === 'extraPaddles') {
            newPriceDetails.extraPaddles = calculateDailyCost(value, formData.checkIn, formData.checkOut, 20);
        } else if (e.target.name === 'insurance') {
            newPriceDetails.insurance = value ? calculateDailyCost(1, formData.checkIn, formData.checkOut, 30) : 0;
        }

        if (e.target.name === 'checkIn' || e.target.name === 'checkOut') {
            newPriceDetails.canoes = calculateCanoePrice(formData.canoeQuantity, formData.checkIn, formData.checkOut);
            newPriceDetails.lifejacket = calculateDailyCost(formData.lifejacket, formData.checkIn, formData.checkOut, 10);
            newPriceDetails.extraPaddles = calculateDailyCost(formData.extraPaddles, formData.checkIn, formData.checkOut, 20);
            newPriceDetails.insurance = formData.insurance ? calculateDailyCost(1, formData.checkIn, formData.checkOut, 30) : 0;
        }

        newPriceDetails.total = newPriceDetails.canoes + newPriceDetails.lifejacket + newPriceDetails.extraPaddles + newPriceDetails.insurance;
        setPriceDetails(newPriceDetails);
    };

    const calculateCanoePrice = (quantity, checkIn, checkOut) => {
        return calculateDailyCost(quantity, checkIn, checkOut, 100);
    };

    const calculateDailyCost = (quantity, checkIn, checkOut, unitPrice) => {
        if (!checkIn || !checkOut) return 0;
        let checkInDate = new Date(checkIn);
        let checkOutDate = new Date(checkOut);

        checkInDate.setHours(0, 0, 0, 0);
        checkOutDate.setHours(0, 0, 0, 0);

        const diffTime = Math.abs(checkOutDate - checkInDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return quantity * diffDays * unitPrice;
    };

        const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div
            className="position-relative d-flex justify-content-center align-items-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="d-flex justify-content-around w-100"
                style={{
                    marginTop: '20vh',
                    marginBottom: '20vh',
                    maxWidth: '1000px',
                    opacity: 0.9,
                }}
            >
                <div
                    className="bg-white rounded p-3 p-md-5"
                    style={{
                        flex: 1,
                        width: "60%",
                        marginRight: "10px",
                        boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.8)"
                    }}
                >
                    <Container>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicName" className="mt-1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter full name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" className="mt-1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckIn" className="mt-1">
                                <Form.Label>Pick-up Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="checkIn"
                                    value={formData.checkIn}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckOut" className="mt-1">
                                <Form.Label>Drop-off Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="checkOut"
                                    value={formData.checkOut}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicCanoeQuantity" className="mt-1">
                                <Form.Label>Canoe Quantity</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="canoeQuantity"
                                    value={formData.canoeQuantity}
                                    onChange={handleChange}
                                >
                                    {[...Array(10).keys()].map((i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicLifejacket" className="mt-1">
                                <Form.Label>Lifejacket Quantity</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="lifejacket"
                                    value={formData.lifejacket}
                                    onChange={handleChange}
                                >
                                    {[...Array(10).keys()].map((i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicExtraPaddles" className="mt-1">
                                <Form.Label>Extra Paddles Quantity</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="extraPaddles"
                                    value={formData.extraPaddles}
                                    onChange={handleChange}
                                >
                                    {[...Array(10).keys()].map((i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicInsurance" className="mt-1">
                                <Form.Check
                                    type="checkbox"
                                    label="Add Insurance"
                                    name="insurance"
                                    checked={formData.insurance}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    <StripeReturn/>
                    </Container>
                </div>
                <div
                    className="bg-white rounded p-3 p-md-5"
                    style={{
                        flex: 1,
                        width: "30%",
                        marginLeft: "10px",
                        boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.8)"
                    }}
                >
                    <Container>
                        <Card.Body>
                            <Card.Title>Rental Info</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <strong>Canoes:</strong> ${priceDetails.canoes}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Lifejackets:</strong> ${priceDetails.lifejacket}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Extra Paddles:</strong> ${priceDetails.extraPaddles}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Insurance:</strong> ${priceDetails.insurance}
                                </ListGroup.Item>
                            </ListGroup>
                            <div className="mt-3">
                                <h3><strong>Total price:</strong> ${priceDetails.total}</h3>
                            </div>
                        </Card.Body>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Booking;
