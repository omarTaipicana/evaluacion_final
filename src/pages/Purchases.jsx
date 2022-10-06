import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShopingThunk } from '../store/slice/shoping.slice';
import { format } from "date-fns";
import { Button, Card, Col, Form, InputGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Purchases = () => {


    const dispatch = useDispatch()
    const shoping = useSelector((state) => state.shoping);

    useEffect(() => {
        dispatch(getShopingThunk())
    }, [])

    return (
        <div>
            <h2>My purchases</h2>
            <Card >
                <ListGroup>
                    {shoping.map(shoping => (
                        <ListGroupItem key={shoping.id } >
                            <ListGroupItem variant='dark'>
                                <Card.Header as="h5" >{format(new Date(shoping.updatedAt), "MMM-d-Y")}</Card.Header>
                                {shoping.cart.products.map(product => (
                                    <ListGroup.Item key={product.price}>
                                        <Row >
                                            <Col>{product.title}</Col>
                                            <Col>{"Amount:"}{" "}{product?.productsInCart?.quantity}</Col>
                                            <Col>{"Price:"}{" "}{product.price}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroupItem>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Card>

        </div>
    );
};

export default Purchases;