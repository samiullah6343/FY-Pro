import React, { Component } from 'react';
import { Row, Col, Slider, Slide } from 'react-materialize';

import dishwash from '../Images/wp-dw/dishwash.jpg';
import cores from '../Images/wp-dw/cores.jpeg';
import fulldw from '../Images/wp-dw/FullDW.png';
import dw1 from '../Images/wp-dw/Image1.jpg';
import small from '../Images/wp-dw/smallDW.png';
import dish from '../Images/wp-dw/dishwash1.jpg';

class Dishw extends Component {

    render() {

        return (

            <div>
                <div>
                    <Slider>
                        <Slide src={dishwash}></Slide>
                        <Slide src={dish}></Slide>
                    </Slider>
                </div>
                <div className="section"></div>


                <div className="container">


                    <center><h4 className="water">Freestanding Dishwasher</h4></center>
                    <center>
                    <h5 className="price">Price : 65000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                    <div className="section"></div>


                    <Row>
                        <Col s={6} className="grid-example"><img src={fulldw} /></Col>
                        <Col s={6} className="grid-example"><p>Available in 12 & 14 Sets !<br />
                            Wipe your hands clean of dirty dishes thanks to Westpoint dishwashers.
                            The high-temperature wash cycle attacks dried-on foods and greasy dishes with ease so you don’t need to pre-rinse your dinnerware.Keep your appliance running efficiently with the easy-to-clean filters</p>

                            <img src={dw1} />
                        </Col>
                    </Row>
                    <div className="section"></div>

                        </div>

                    <img src={cores} width="1450px" />


                    <div className="container">

                    <center><h4 className="water">Countertop Dishwasher</h4></center>
                    <center>
                    <h5 className="price">Price : 30000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>

                    <div className="section"></div>
                    <div className="section"></div>



                    <Row>
                        <Col s={6} className="grid-example"><img src={small} /></Col>
                        <Col s={6} className="grid-example"><p>Westpoint Portable Dishwashers provide all the convenience of a full-size dishwasher for cleaning your dishes.

It features enough space to accommodate 6 or 8 standard place settings, making it perfect for singles, couples, apartments or the office kitchen.

With easy-to-use, push-button electronic controls, it is designed with a stainless steel interior that includes a durable rack, silverware basket and cup shelf for easy loading.</p></Col>
                    </Row>


                </div>
            </div>

        )
    }

}

export default Dishw;