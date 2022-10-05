import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form"
const Login = () => {

    const { register, handleSubmit } = useForm()

    const sumbit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(sumbit)} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control {...register("email")} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control {...register("password")} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div >
    );
};

export default Login;