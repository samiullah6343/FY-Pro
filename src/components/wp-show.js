import React, { Component } from 'react';
import { Row, Col, Slider, Slide } from 'react-materialize';

import cans from '../Images/wp-show/Canswp.jpg';
import pdt from '../Images/wp-show/pdt.png';
import pdt1 from '../Images/wp-show/pdt1.png';
import pict from '../Images/wp-show/PICT.png';
import sprite from '../Images/wp-show/sprite.jpg';

class Show extends Component {

    render() {

        return (

            <div>
                <div>
                    <Slider>
                        <Slide src={cans}></Slide>
                        <Slide src={sprite}></Slide>
                    </Slider>
                </div>
                <div className="section"></div>

                <div className="container">

                    <center><h4 className="water">Single Door Vertical Showcase</h4></center>
                    <center>
                        <h5 className="price">Price : 10000 Rs/-</h5>
                        <Link className="cart" to="/cart">Buy Online</Link>
                    </center>

                    <div className="section"></div>


                    <Row>

                        <Col s={6} className='grid-example'><img className="waterd" src={pdt} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><p>Illuminated canopy<br></br>
                            Interior lighting to provide perfect product visibility<br></br>
                            Tempered glass door<br></br>
                            Automatic defrost<br></br>
                            Self-closing door<br></br>
                            Legs with height adjustability.</p></center> </Col>
                    </Row>



                    <center><h4 className="water">Double Doors Vertical Showcase</h4></center>
                    <center>
                        <h5 className="price">Price : 15000 Rs/-</h5>
                        <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                    <div className="section"></div>


                    <Row>

                        <Col s={6} className='grid-example'><img className="waterd" src={pdt1} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><p>Illuminated canopy option<br></br>
                            Interior lighting to provide perfect product visibility<br></br>
                            Tempered glass door<br></br>
                            Legs with adjustable height<br></br>
                            Analog or digital thermometer option<br></br>
                            Door lock option</p></center> </Col>
                    </Row>




                    <center><h4 className="water">Chest Showcase</h4></center>
                    <center>
                        <h5 className="price">Price : 20000 Rs/-</h5>
                        <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                    <div className="section"></div>


                    <Row>

                        <Col s={6} className='grid-example'><img className="waterd" src={pict} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><p>Flip-flop covered, tempered, heat isolated sliding glass covered and block covered options<br></br> to storage and sell cold beverages
                            Strong wheels providing mobility<br></br>
                            Digital or serigraphy brand application option<br></br>
                            Wide inner volume enabling a high loading capacity.</p></center> </Col>
                    </Row>
                </div>

            </div>

        )
    }

}

export default Show;