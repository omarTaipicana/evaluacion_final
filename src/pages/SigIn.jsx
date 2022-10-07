import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"

const SigIn = () => {

    const { reset, register, handleSubmit } = useForm()
    const navigate = useNavigate

    const sumbit = (data) => {
        axios
            .post(`https://ecommerce-api-react.herokuapp.com/api/v1/users`, data)
            .then(res => {
                reset({
                    firstName: '',
                    lastName: "",
                    email: "",
                    password: "",
                    phone: "",
                    role: ""
                })
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(sumbit)} >
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control {...register("firstName")} type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control {...register("lastName")} type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control {...register("email")} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("password")} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control {...register("phone")} type="number" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Role</Form.Label>
                    <Form.Control {...register("role")} type="text" placeholder="Role" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    );
};

export default SigIn;