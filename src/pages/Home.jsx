import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import { addProductCartTunk } from '../store/slice/cart.products.slice';

const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
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
        const filter = products.filter(products => products.category.id == categoryId)
        setNewFiltered(categoryId === "all" ? products : filter)
    }

    const searchProduct = () => {
        const filter = products.filter(products => products.title.toUpperCase().includes(searchValue.toUpperCase()))
        setNewFiltered(filter ? filter : products)
        setSearchValue("")
    }

    const [inHover, setHover] = useState(0);

    const addProduct = (id) => {
        navigate("/")
        const product = {
            id: id,
            quantity: 1,
        }
        dispatch(addProductCartTunk(product))

    }

    return (
        <div>
            <h1>home</h1>
            <div className='search-content'>
                <div>
                    <select className='search' onChange={e => filterCategory(e.target.value)}>
                        <option value={"all"} >Filter Category</option>
                        <option value={"all"} >All</option>
                        {
                            categories.map(category => (
                                <option
                                    key={category.id}
                                    style={{ cursor: "pointer", hover: "1.05" }}
                                    value={category.id}
                                >
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <input
                        className='search'
                        type="text"
                        placeholder="Search Product"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && searchProduct()}
                    />
                    <button
                        className='search'
                        onClick={searchProduct}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className='products-content'>
                {newFiltered.map(product => (
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
                                            <i onClick={() => addProduct(product.id)} style={{ color: "green", fontSize: "1.7rem" }} className="fa-sharp fa-solid fa-cart-arrow-down"></i>
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

export default Home;