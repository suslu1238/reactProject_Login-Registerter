import {Link} from 'react-router-dom';
import React from 'react';
import './Navbar.css';
function Navbara(){
    return(
        <div className='Navbarr'>
            <ul>
                <li>
                    <Link to="/logi">Login</Link>
                </li>
                <li>
                    <Link to="/regis">Registration</Link>
                </li>
            </ul>
        </div>
    );
}
export default Navbara;