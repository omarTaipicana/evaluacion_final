import './App.css'
import "./styles/LoadingScreen.css"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import NewProductId from './pages/NewProductId'
import Login from './pages/Login'
import Products from './pages/Products'
import MyNav from './components/MyNav'
import LoadingScreen from './components/LoadingScreen'
import { useDispatch, useSelector } from "react-redux"
import { getProductsThunk } from './store/slice/products.slice'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ProtectedRoutes from './components/ProtecterRoute'
import Purchases from './pages/Purchases'

function App() {

  const loadingScreen = useSelector((state) => state.loadingScreen);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [])

  return (
    <div className="App">
      <HashRouter>
        <MyNav />
        {loadingScreen && <LoadingScreen />}
        <Container className='mt-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<NewProductId />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={<Products />} />

            <Route element={<ProtectedRoutes />}>
              <Route path='/purchases' element={<Purchases />} />
            </Route>

          </Routes>
        </Container>
      </HashRouter>
    </div>
  )
}

export default App
