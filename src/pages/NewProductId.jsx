import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
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
            <Col>
                {productId?.title}
                <br />
                <img className='img-fluid' src={productId?.productImgs[0]} alt="" />
                <br />
            </Col>
            <Col lg={3}>
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