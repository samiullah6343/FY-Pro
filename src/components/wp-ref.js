import React, { Component } from 'react';
import { Row, Col, Slider, Slide } from 'react-materialize';

import combi from '../Images/wp-ref/COMBI.png';
import ctref from '../Images/wp-ref/CTREF.jpg';
import door2 from '../Images/wp-ref/door2.jpg';
import free2 from '../Images/wp-ref/freezer2.jpg';
import free1 from '../Images/wp-ref/freezer7.jpg';
import free3 from '../Images/wp-ref/freezer3.jpg';
import free4 from '../Images/wp-ref/freezer5.jpg';
import french from '../Images/wp-ref/french.png';
import im from '../Images/wp-ref/IM.jpg';
import french1 from '../Images/wp-ref/french1.jpg';
import french2 from '../Images/wp-ref/french2.jpg';
import inverter from '../Images/wp-ref/inverter.png';
import mini from '../Images/wp-ref/MINI.jpg';
import moi from '../Images/wp-ref/MOI.jpg';
import mute from '../Images/wp-ref/MUTE.jpg';
import pdt from '../Images/wp-ref/pdt.jpg';
import side from '../Images/wp-ref/side.png';
import wdref from '../Images/wp-ref/WDref.jpg';
import glass from '../Images/wp-ref/glass.jpg';

import westref from '../Images/wp-ref/westpointref.png';


class Refri extends Component {

    render() {

        return (

            <div>
                <div>
                    <Slider>
                        <Slide src={westref}></Slide>
                        <Slide src={glass}></Slide>
                    </Slider>
                </div>
                <div className="section"></div>


                <div className="container">
                    <center><h4 className="water">Top Mounted & Combi Nofrost</h4></center>
                    <center>
                    <h5 className="price">Price : 50000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>



                    <p>Westpoint Nofrost technology has an upgraded air duct and circulation system ensuring no-frost in the cooling and freezing compartments so the user does not have to manually defrost the refrigerator and food remains fresh.</p>
                    <div className="section"></div>
                    <div className="section"></div>

                    <Row>
                        <Col s={3} className="grid-example"><img src={door2} height="450px" /> </Col>
                        <Col s={3} className="grid-example"><img src={combi} height="450px" /> </Col>
                        <Col s={3} className="grid-example"><p>Electronic control LED display<br></br>Electronic control to get more accurate temperature.</p><div className="section"></div><img src={inverter} height="150px" /><div className="section"></div><p>Integrated Water DispenserThe water<br></br> dispenser to always drink fresh water</p> </Col>
                        <Col s={3} className="grid-example"><img src={ctref} height="200px" /><div className="section"></div><img src={wdref} height="200px" /> </Col>
                    </Row>


                    <center><h4 className="water">Side By Side</h4></center>
                    <center>
                    <h5 className="price">Price : 45000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                    <div className="section"></div><div className="section"></div>

                    <Row>

                        <Col s={6} className="grid-example"><img src={side} hegiht="100px" width="300px" /></Col>
                        <Col s={6} className="grid-example"><img src={pdt} hegiht="450px" /></Col>

                    </Row>

                    <Row>
                        <Col s={3} className="grid-example"><p>Multi-air flow
                    Multi-air flow design , air conditioning is more uniform.</p><div className="section"></div><img src={free1} height="100px" /> </Col>
                        <Col s={3} className="grid-example"><p>Stainless steel handleTop of the line stainless steel handle</p>
                    <div className="section"></div>
                    <div className="section"></div><div className="section"></div>
                        <img src={free2} height="100px" /> </Col>
                        <Col s={3} className="grid-example"><p>Spill-proof ShelvesThe wholly plastic packaging technology can effectively prevent the liquid from seeping the convenient.</p><div className="section"></div><img src={free3} height="100px" /> </Col>
                        <Col s={3} className="grid-example"><p>Integrated Ice Maker3 ice-making mode： ice block, crushed ice and ice water.</p><div className="section"></div><div className="section"></div><img src={free4} height="100px" /> </Col>
                    </Row>


                    <center><h4 className="water">French door</h4></center>
                    <center>
                    <h5 className="price">Price : 49000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>

                    <div className="section"></div><div className="section"></div>


                    <Row>
                        <Col s={6} className="grid-example"><img src={french} height="500px" /> </Col>
                        <Col s={6} className="grid-example"><img src={french2} height="500px" /> </Col>

                    </Row>

                    <Row>

                        <Col s={4} className="grid-example"><p>Highly Moisture-Retention TechnologyMaximum humidity of French door refrigerator of Midea can reach to 80%, 50% higher than normal no-frost refrigerator, by the improvement of refrigeration system, the optimization of duct system and the combination with frequency conversion system.</p><img src={moi} height="130px" /></Col>
                        <Col s={4} className="grid-example"><p>Automatic Ice-makingUse Japanese water supply device with Ag+ filter block. It can automatically make pure ice cubes by just adding water.</p><div className="section"></div><div className="section"></div><div className="section"></div><img src={im} height="130px" /></Col>
                        <Col s={4} className="grid-example"><p>Mute Slide DesignDrawer with metal guide can be pulled easily and mutely wihtout being stuck</p><div className="section"></div><div className="section"></div><div className="section"></div><img src={mute} height="130px" /></Col>

                    </Row>


                    <center><h4 className="water">Static</h4></center>
                    <center>
                    <h5 className="price">Price : 25000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>

                    <Row>

                    <div className="section"></div>
                        <Col s={6} className="grid-example"><img src={mini} height="450px" /></Col>
                        <Col s={6} className="grid-example">
                    <div className="section"></div>
                    <div className="section"></div>
                    <div className="section"></div>

                        <p>A large selection of Tropical Static Refrigerators.<br />

                            Table Top | 1 Door | Top Mounted | Combi<br />

                            Highly reliable.</p></Col>

                    </Row>


                </div>
            </div>



        )
    }

}

export default Refri;