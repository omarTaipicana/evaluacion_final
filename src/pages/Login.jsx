import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoadingScreen } from '../store/slice/loading.screen.slice';
const Login = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    console.log(localStorage.getItem("name"))

    const sumbit = (data) => {
        dispatch(setLoadingScreen(true))
        axios
            .post(`https://ecommerce-api-react.herokuapp.com/api/v1/users/login`, data)
            .then(res => {
                localStorage.setItem("token", res?.data?.data?.token)
                localStorage.setItem("name", res?.data?.data?.user?.firstName)
                
                navigate("/")
            })
            .finally(() => dispatch(setLoadingScreen(false)))
            .catch(error => error.response?.status === 404 && alert("credenciales invalidas"))
    }
    console.log

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