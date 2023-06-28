import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {

    const { user, signOutUser } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? 
                        <>
                            <Link><small>{user.email}</small></Link>
                            <button className='logout' onClick={signOutUser}>Log Out</button>
                        </> :
                        <>
                            <Link to="/login">Log In</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;