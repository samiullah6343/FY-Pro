import React, { Component } from 'react';
import { Row, Col, Slider, Slide } from 'react-materialize';
import {Link} from 'react-router-dom';

import Wash from '../Images/wp-wm/Washing-westpoint.jpg';
import MAl from '../Images/wp-wm/MAL.png';
import MAl1 from '../Images/wp-wm/MAL1.png';
import MAl2 from '../Images/wp-wm/MAL2.png';
import Picto1 from '../Images/wp-wm/PICTO-1.jpg';
import Picto2 from '../Images/wp-wm/PICTO-2.jpg';
import Picto3 from '../Images/wp-wm/PICTO-3.jpg';
import Picto4 from '../Images/wp-wm/PICTO-4.jpg';
import Picto5 from '../Images/wp-wm/PICTO-WM.jpg';
import Picto6 from '../Images/wp-wm/PICTO-WM2.jpg';
import machine from '../Images/wp-wm/machine.jpg';

class Wmachine extends Component {

    render() {

        return (

            <div>
                <div>
                    <Slider>
                        <Slide src={Wash}></Slide>
                        <Slide src={machine}></Slide>
                    </Slider>
                </div>
                <div className="section"></div>

                <div className="container">

                    <center><h4 className="water">Front loading</h4></center>
                    <center>
                    <h5 className="price">Price : 35000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>


                    <div className="section"></div>


                    <Row>

                        <Col s={6} className='grid-example'><img className="waterd" src={MAl} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><p>Illuminated canopy<br></br>
                            Interior lighting to provide perfect product visibility<br></br>
                            Tempered glass door<br></br>
                            Automatic defrost<br></br>
                            Self-closing door<br></br>
                            Legs with height adjustability.</p></center>
                             </Col>
                    </Row>
                    <div className="section"></div>



                    <Row>
                        <Col s={3} className="grid-example"><img src={Picto1} height="150px" /> </Col>
                        <Col s={3} className="grid-example"><img src={Picto2} height="150px" /> </Col>
                        <Col s={3} className="grid-example"><img src={Picto3} height="150px" /> </Col>
                        <Col s={3} className="grid-example"><img src={Picto4} height="150px" /> </Col>
                    </Row>



                    <center><h4 className="water">Top loading</h4></center>
                    <center>
                    <h5 className="price">Price : 30000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                    <div className="section"></div>


                    <Row>

                        <Col s={6} className='grid-example'><img className="waterd" src={MAl1} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><p>Illuminated canopy option<br></br>
                            Interior lighting to provide perfect product visibility<br></br>
                            Tempered glass door<br></br>
                            Legs with adjustable height<br></br>
                            Analog or digital thermometer option<br></br>
                            Door lock option</p></center> 
                        <div className="section"></div>

                            <img src={Picto5} />
                            </Col>
                    </Row>

                    




                    <center><h4 className="water">Twin tube</h4></center>
                    <center>
                    <h5 className="price">Price : 50000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                    <div className="section"></div>


                    <Row>

                        <Col s={6} className='grid-example'><img className="waterd" src={MAl2} height="400px" /></Col>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><p>Flip-flop covered, tempered, heat isolated sliding glass covered and block covered options<br></br> to storage and sell cold beverages
Strong wheels providing mobility<br></br>
                            Digital or serigraphy brand application option<br></br>
                            Wide inner volume enabling a high loading capacity.</p></center>
                        <div className="section"></div>
                        <div className="section"></div>

                            <img src={Picto6} />
                             </Col>
                    </Row>
                </div>


            </div>

        )
    }

}

export default Wmachine;