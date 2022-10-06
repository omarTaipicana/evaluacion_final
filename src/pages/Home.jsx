import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';


const Home = () => {

    const navigate = useNavigate()
    const products = useSelector((state) => state.products);
    const [categories, setCategories] = useState([])
    const [newFiltered, setNewFiltered] = useState([])
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        axios
            .get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
            .then(res => setCategories(res.data.data.categories))
    }, [])

    useEffect(() => {
        setNewFiltered(products)
    }, [products])

    const filterCategory = (categoryId) => {
        const filter = products.filter(products => products.category.id === categoryId)
        setNewFiltered(filter)
    }

    const searchProduct = () => {
        const filter = products.filter(products => products.title.toUpperCase().includes(searchValue.toUpperCase()))
        setNewFiltered(filter ? filter : products)
    }


    return (
        <Row>
            <Col lg={3}>
                <h1>home</h1>
                <ListGroup>
                    <ListGroup.Item onClick={() => setNewFiltered(products)} >All</ListGroup.Item>
                    {
                        categories.map(category => (
                            <ListGroup.Item
                                key={category.id}
                                onClick={() => filterCategory(category.id)}
                                style={{ cursor: "pointer", hover: "1.05" }}
                            >
                                {category.name}
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search Product"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && searchProduct()}
                    />
                    <Button onClick={searchProduct} variant="outline-secondary" >
                        Button
                    </Button>
                </InputGroup>
            </Col>
            <Col>

                <Row xs={1} md={2} xl={3} className="g-4">
                    {newFiltered.map(product => (
                        <Col
                            key={product.title}
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            <Card style={{ height: "100%" }}>
                                <Card.Img className="img-fluid" src={product.productImgs[1]} variant="top" />
                                <Card.Body>
                                    <Card.Title> {product.title}</Card.Title>
                                    <Card.Text>
                                        <Row>
                                            <Col>
                                                {"Price:"}
                                                {" "}
                                                {product.price}
                                            </Col>
                                            <Col lg={3}>
                                                <i style={{ color: "green", fontSize: "1.7rem" }} class="fa-sharp fa-solid fa-cart-arrow-down"></i>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                {/* <ul>
                    {
                        newFiltered.map(product => (
                            <li key={product.title} onClick={() => navigate(`/product/${product.id}`)}>
                                <img className="img-fluid" src={product.productImgs[0]} alt="" />
                                <br />
                                {product.title}
                            </li>
                        ))
                    }
                </ul> */}
            </Col>
        </Row>
    );
};

export default Home;