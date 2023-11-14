import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './Login';
import { useLocation, useNavigate } from 'react-router-dom';


function Header() {
    const [userName, setUserName] = useState('')
    const navigate = useNavigate();
    
    const location = useLocation();
    const [isLogout, setIsLogout] = useState(false);
    const [isLogin, setIslogin] = useState(false)
    const handleLogin = () => {
        const data = localStorage.getItem('userName')
        if (data) {
            setUserName(data)
            setIslogin(true)
        } else {
            setUserName('')
            setIslogin(false)
        }

    }
    useEffect(() => {
        handleLogin()
    }, [location, isLogout])
    const handleLogout = async () => {
        await localStorage.clear();
        setIsLogout(!isLogout);
    }

    return (

        <Navbar className="  navbar navbar-expand-lg bg-white navbar-light  px-4 px-lg-5 custom-sticky mb-5" fixed="top" >
            <a href="index.html" className="navbar-brand d-flex align-items-center">
                <h1 className="m-0">Milky</h1>
            </a>
            <button
                type="button"
                className="navbar-toggler me-0"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink to={"*"} className="nav-item nav-link">
                        Home
                    </NavLink>

                    <NavLink to={'/product'} className="nav-item nav-link active">
                        Products
                    </NavLink>
                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Manager
                        </a>
                        <div className="dropdown-menu bg-light m-0">
                            <a href="gallery.html" className="dropdown-item">
                                Employee
                            </a>
                            <a href="feature.html" className="dropdown-item">

                            </a>
                            <a href="team.html" className="dropdown-item">
                                Warehouse
                            </a>
                            <a href="testimonial.html" className="dropdown-item">
                                Suplier
                            </a>
                            <a href="404.html" className="dropdown-item">
                                Report
                            </a>
                        </div>
                    </div>
                    {!isLogin ? <Link to={'/signup'} className="nav-item nav-link">
                        Signup
                    </Link>:('')}
                   
                    {!isLogin ? <Link to={'/login'} className="nav-item nav-link">
                        Login
                    </Link> :('')}
                 

                </div>
                <div className="border-start ps-4 d-none d-lg-flex">
                    <input className='form-control' />
                    <button type="button" className="btn btn-sm p-0 w-25">
                        <i className="fa fa-search" />
                    </button>
                    <button type="button" className="btn btn-sm p-0 w-25">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
                <div className="border-start ps-4 d-none d-lg-flex">
                    {isLogin ? <button type="button" className="btn btn-sm p-2 w-30">
                        <Link to={'*'} onClick={handleLogout}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </Link>
                    </button>:('')}
                 
                    <p className="nav-item nav-link mt-2 pe-2">
                        {
                            userName
                        }
                    </p>
                </div>
            </div>
        </Navbar>



    );
}

export default Header;