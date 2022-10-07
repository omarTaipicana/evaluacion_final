import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Carousel, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addProductCartTunk } from '../store/slice/cart.products.slice';

const NewProductId = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [rate, setRate] = useState(1)
    const [inHover, setHover] = useState(0);
    const products = useSelector(state => state.products);
    const productId = products.find(produc => produc.id === Number(id))
    const relatedProducts = products.filter(products => products.category.id === productId.category.id)


    useEffect(() => {
        setRate(1)
    }, [id])

    const addProduct = () => {
        const product = {
            id: id,
            quantity: rate,
        }
        dispatch(addProductCartTunk(product))
    }

    return (
        <div>
            <div className='product-info-content'>
                <Col className='carousel-content'>
                    <h3>{productId?.title}</h3>
                    <br />
                    <Carousel >
                        <Carousel.Item className='carousel-img' interval={1000}>
                            <img
                                className="d-block w-auto "
                                src={productId?.productImgs[0]}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className='carousel-img' interval={500}>
                            <img
                                className="d-block w-auto "
                                src={productId?.productImgs[1]}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className='carousel-img'>
                            <img
                                className="d-block w-auto "
                                src={productId?.productImgs[2]}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className='info-product'>
                    <div >
                        <p>{productId?.description}</p>
                    </div>
                    <div className='add-to-car'>
                        <h2>{"Price:"}{" "}{productId?.price}</h2>
                        <div>
                            <h2>Quantity</h2>
                            <Button className='me-5' onClick={() => setRate(rate === 1 ? 1 : rate - 1)}>-</Button>
                            {rate}
                            <Button className='ms-5' onClick={() => setRate(rate + 1)}>+</Button>
                            <br />
                            <Button className='add-to-car-btn' onClick={addProduct}>Add to Cart</Button>
                        </div>
                    </div>
                </Col>
            </div>

            <div className='products-content'>
                {relatedProducts.map(product => (
                    <div
                        onMouseEnter={() => setHover(product.id)} onMouseLeave={() => setHover(0)}
                        className='card-content'
                        key={product.title}
                    >
                        <div style={{ height: "min-content" }}>
                            <img
                                className='img-products'
                                src={product.productImgs[product.id == inHover ? 0 : 1]}
                                onClick={() => navigate(`/product/${product.id}`)}
                            />
                            <div>
                                <Card.Title className='mb-3'> {product.title}</Card.Title>
                                <div>
                                    <Row>
                                        <Col>
                                            {"Price:"}
                                            {" "}
                                            {product.price}
                                        </Col>
                                        <Col lg={3} >
                                            <i onClick={addProduct} style={{ color: "green", fontSize: "1.7rem" }} className="fa-sharp fa-solid fa-cart-arrow-down"></i>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default NewProductId;