import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return (
        <div>
            <nav>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </nav>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;