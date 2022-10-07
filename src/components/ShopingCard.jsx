import React from 'react';
import { useEffect } from 'react';
import { Button, Col, ListGroup, ListGroupItem, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProductCartThunk, getCarProductsThunk, purchasesCartThunk } from '../store/slice/cart.products.slice';

const ShopingCard = ({ show, handleClose }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.cartProducts);

    useEffect(() => {
        dispatch(getCarProductsThunk())
    }, [])

    const deleteProductCart=(id)=>{
        dispatch(deleteProductCartThunk(id))
    }

    const purchasesCart=()=>{
        dispatch(purchasesCartThunk())
        navigate("/purchases")
        // setShow(true)
    }

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cartProducts.map(product => (
                        <ListGroup key={product.id}>
                            <ListGroupItem>
                                <ListGroupItem >
                                    <Link  to={`/product/${product.id}`}> {product.title}</Link>
                                    <ListGroupItem>
                                        <Row>
                                            <Col>
                                                {"cantidad"}
                                            </Col>
                                            <Col>
                                                {product.price}
                                            </Col>
                                            <Col lg={2}>
                                                <i onClick={()=>deleteProductCart(product.id)} className="fa-solid fa-trash-can" style={{ color: "red", fontSize: "1.7rem" }}></i>
                                            </Col>

                                        </Row>
                                    </ListGroupItem>
                                </ListGroupItem>
                            </ListGroupItem>
                        </ListGroup>
                    ))
                }
                <Button onClick={purchasesCart}>to buy</Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ShopingCard;