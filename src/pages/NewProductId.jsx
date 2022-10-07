import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Carousel, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addProductCartTunk } from '../store/slice/cart.products.slice';

const NewProductId = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const [rate, setRate] = useState(1)
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
        <Row>
            <Card>
                <Row>
                    <Col>

                        {productId?.title}
                        <br />
                        <Carousel className='carousel-content'>
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
                    <Col>
                        <Card className='mt-3 , w-300'>
                            <h2>{productId?.title}</h2>
                            <p>{productId?.description}</p>
                        </Card>
                        <Card>
                            <h2>{"Price:"}{" "}</h2>
                            <div>
                                <h2>Quantity</h2>
                                <Button className='me-5' onClick={() => setRate(rate === 1 ? 1 : rate - 1)}>-</Button>
                                {rate}
                                <Button className='ms-5' onClick={() => setRate(rate + 1)}>+</Button>
                                <br />
                                <Button onClick={addProduct}>Add to Cart</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Card>
            <Card className='mt-3'>
                <Row xs={2} md={3} xl={5}>

                    {
                        relatedProducts.map(product => (
                            <Card key={product.id} className='m-3'>
                                <div>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Col className='mt-3'
                                    >
                                        <Link to={`/product/${product.id}`}>
                                            <img
                                                style={{ height: "20vh" }}
                                                src={product.productImgs}
                                                alt=""
                                            />
                                            <h6>{product.title}</h6>
                                        </Link>
                                    </Col>
                                </div>
                            </Card>
                        ))
                    }
                </Row>
            </Card>
        </Row>

    );
};

export default NewProductId;