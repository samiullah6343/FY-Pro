import React, { Component } from 'react';
import { Row, Col, Slider, Slide } from 'react-materialize';

import coffre from '../Images/wp-frz/coffre.png';
import lids from '../Images/wp-frz/LIDS2.png';
import panier from '../Images/wp-frz/panier.jpg';
import porte from '../Images/wp-frz/porte.jpg';
import roulte from '../Images/wp-frz/roulette.jpg';
import serru from '../Images/wp-frz/serrure.jpg';
import vertical from '../Images/wp-frz/verti.png';
import free1 from '../Images/wp-frz/freezer8.jpg';
import free2 from '../Images/wp-frz/freezer9.jpg';
import harvest from '../Images/wp-frz/harves.jpg';

import westfrz from '../Images/wp-frz/westpoint-freezer.jpg';
class Freezer extends Component {

    render() {

        return (

            <div>
                <div>
                    <Slider>
                        <Slide src={westfrz}></Slide>
                        <Slide src={harvest}></Slide>
                    </Slider>
                </div>
                <div className="section"></div>


                <div className="container">
                    <center><h4 className="water">Chest Freezer</h4></center>
                    <center>
                    <h5 className="price">Price : 23000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                    <div className="section"></div>


                    <Row>

                        <Col s={6} className='grid-example'><img className="watered" src={coffre} width="450px" /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><p>Available in Static, Nofrost & with Inverter compressor (A++)

Aluminium inside OR White enameled<br></br>

                            Triple coated internal liner (anti-smell, anti-spot, hygienic, resistant & pratical)<br></br>

                            Compensated door with reinforced hinges<br></br>

                            Handy drain for quick defrosting</p></center> </Col>
                    </Row>


                    <Row>


                        <Col s={6} className='grid-example'><img className="watered" src={lids} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center> <p>Adjustable thermostat & fast freeze
Easy to clean interior<br></br>
                            Rollers for easy movement<br></br>
                            Removable storage basket<br></br>
                            Lock optional</p></center> </Col>

                    </Row>






                    <Row>

                        <Col s={6} className='grid-example'><center><h5>Pulley (Optional)</h5><p>Pulley for easy movement</p></center> </Col>

                        <Col s={6} className='grid-example'><img className="watered" src={porte} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                    </Row>




                    <Row>


                        <Col s={6} className='grid-example'><center><h5>Hovering Door
</h5><p>Door can be opened and stay for different angle from 45°to 75°.</p></center> </Col>

                        <Col s={6} className='grid-example'><img className="watered" src={roulte} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                    </Row>




                    <Row>

                        <Col s={6} className='grid-example'><center><h5>Lock Optional</h5><p>Safety with lock.</p></center> </Col>

                        <Col s={6} className='grid-example'><img className="watered" src={serru} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                    </Row>

                    <Row>
                        <Col s={6} className='grid-example'><center><h5>Removable storage</h5><p>Removable storage basket can be removed easily.</p></center> </Col>


                        <Col s={6} className='grid-example'><img className="watered" src={panier} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                    </Row>


                    <center><h4 className="water">Vertical Freezer </h4></center>
                    <div className="section"></div>
                    <div className="section"></div>



                    <Row>



                        <Col s={6} className='grid-example'><img className="watered" src={vertical} height="450px" /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><h5>Available in Static & Nofrost</h5><p>Transparent Drawers

Multi-air flow<br></br>
Electronic control LED display<br></br>
Reversible door<br></br>
Depressure Handle<br></br>
Twist ice cube make</p></center> </Col>
                    </Row>




                    <Row>


                        <Col s={6} className='grid-example'><center><h5>Electronic control LED display</h5><p>Electronic control to get more accurate temperature.</p></center> </Col>

                        <Col s={6} className='grid-example'><img className="watered" src={free1} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                    </Row>



                    <Row>

                        <Col s={6} className='grid-example'><center><h5>Multi-air flow</h5><p>Multi-air flow design , air conditioning is more uniform.</p></center> </Col>

                        <Col s={6} className='grid-example'><img className="watered" src={free2} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                    </Row>

                </div>


            </div>

        )
    }

}

export default Freezer;