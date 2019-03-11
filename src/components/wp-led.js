import React, { Component } from 'react';
import { Row, Col, Slider, Slide } from 'react-materialize';

import LED from '../Images/wp-led/LED-Solar.png'
import solar from '../Images/wp-led/solar.png';
import solar_ex from '../Images/wp-led/solar-ex.png';
import pv from '../Images/wp-led/270pv.png';
import explod from '../Images/wp-led/module.exploded.bmp';
import new1 from '../Images/wp-led/new1.jpg';
import power from '../Images/wp-led/power.png';



class Led extends Component {

    render() {

        return (

            <div>
                <div>
                    <Slider>
                        <Slide src={LED}></Slide>
                        <Slide src={power}></Slide>
                    </Slider>
                </div>
                <div className="section"></div>


                <div className="section"></div>
                <div className="container">
                    <center><h4 className="water">Solar Water Heater</h4></center>
                    <center>
                    <h5 className="price">Price : 15000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                    <div className="section"></div>


                    <Row>

                        <Col s={6} className='grid-example'><img className="watered" src={solar} width="400px" /></Col>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><img src={solar_ex} width="350px" /> </Col>
                    </Row>

                    <div className="section"></div>

                    <Row>

                    <div className="section"></div>
                    <div className="section"></div>
                    <div className="section"></div>

                    <center><h4 className="water">Photovoltaic Panels</h4></center>
                    <center>
                    <h5 className="price">Price : 20000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                    <div className="section"></div>
                    <div className="section"></div>



                        <Col s={6} className='grid-example'><img className="watered" src={pv} width="400px" height="350px" /></Col>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><img src={explod} width="350px" /> </Col>
                    </Row>
                </div>
                <img src={new1} width="100%"  height="450px"/>
            </div>

        )
    }

}

export default Led;