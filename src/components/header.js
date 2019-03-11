import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import M from 'materialize-css'

import west from '../Images/logo.jpg';

class Header extends Component {

    render() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems);
            
        })


        return (


            <div>

                <ul id="dropdown1" className="dropdown-content">
                    <li><Link to="/wp-ac">Air Conditioners</Link></li>
                    <li><Link to="/wp-ref">Refrigerator</Link></li>
                    <li><Link to="/wp-wm">Washing Machines</Link></li>
                    <li><Link to="/wp-frz">Freezer</Link></li>
                    <li><Link to="/wp-wd">Water Dispancer</Link></li>
                    <li><Link to="/wp-dw">Dish Washer</Link></li>
                    <li><Link to="/wp-tv">TV</Link></li>
                    <li><Link to="/wp-show">Show Case</Link></li>
                    <li><Link to="/wp-led">Solar LED</Link></li>


                </ul>

                <nav>
                    <div className="white nav-wrapper">



                        <Link to="#" className="brand-logo"><img src={west} width="260px" height="60px"/></Link>

                        <ul id="nav-mobile" className="right hide-on-med-and-down">

                            <li className="black"><Link to="/home">Home</Link></li>
                            <li className="black"><Link to="/about">About</Link></li>
                            <li className="black"><Link className="dropdown-trigger" to="#!" data-target="dropdown1">Products<Icon className="material-icons right">arrow_drop_down</Icon></Link></li>
                            <li className="black"><Link to="/contact">Contact Us</Link></li>
                            <li className="black"><Link to="/cart"><Icon>shopping_cart</Icon></Link></li>
                            <li className="black"><Link to="/"><Icon>search</Icon></Link></li>
                            <li className="black"><Link to="/profile">Log In</Link></li>


                        </ul>

                    </div>
                </nav>


                
            </div>

        )
    }

}

export default Header;






