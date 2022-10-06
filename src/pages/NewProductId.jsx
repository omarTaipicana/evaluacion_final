import React from 'react';
import { Card, Carousel, Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const NewProductId = () => {

    const { id } = useParams();
    const products = useSelector(state => state.products);
    const productId = products.find(produc => produc.id === Number(id))
    const relatedProducts = products.filter(products => products.category.id === productId.category.id)


    console.log(relatedProducts)


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
                    </Col>
                </Row>
            </Card>


            <Col lg={6}>
                <ListGroup>
                    {
                        relatedProducts.map(product => (
                            <ListGroup.Item key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.productImgs} alt="" className="img-fluid" />
                                    {product.title}
                                </Link>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Col>
        </Row>
    );
};

export default NewProductId;