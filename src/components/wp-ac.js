import React, { Component } from 'react';
import { Row, Col, Slider, Slide } from 'react-materialize';

import fondacs from '../Images/WP-AC/FONDACS.png';
import ac from '../Images/WP-AC/AC-win.jpg';
import acr from '../Images/WP-AC/AC.jpg';
import ac4 from '../Images/WP-AC/AC4.png';
import confu from '../Images/WP-AC/confu.jpg';
import port from '../Images/WP-AC/portable.jpg';
import split from '../Images/WP-AC/split.png';
import limp from '../Images/WP-AC/limp.jpg';
import air from '../Images/WP-AC/aircon.jpg';



class Airc extends Component {

    render() {

        return (

            <div>

                <div>
                    <Slider>
                        <Slide src={fondacs}></Slide>
                        <Slide src={air}></Slide>
                    </Slider>
                </div>
                <div className="section"></div>

                <div className="container"><center><h4 className="water">Wall Mounted Split</h4></center>
                <center>
                    <h5 className="price">Price : 70000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                    <div className="section"></div>


                    <Row>

                        <Col s={6} className='grid-example'><img className="watered" src={acr} width="400px" /></Col>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><p>Cooling Capacity: 9 000-36 000 Btu/h

Cooling Only and Heat Pump

Supreme Energy Efficiency

Available in T1 & T3

Rotary / Piston  or Inverter Compressor.</p></center> </Col>
                    </Row>

                    <div className="section"></div>
                    <div className="section"></div>


                    <Row>
                        <Col s={6} className="grid-example"><center><h5>1W Standby</h5><p>Our intelligent on-off technology enables Westpoint products to automatically enter energy-saving mode when on standby, cut energy consumption from the normal 5W to 1W, which amounts to saving 80%.</p></center></Col>
                        <div className="section"></div>
                        <div className="section"></div>

                        <Col s={6} className="grid-example"><img src={split} /></Col>
                    </Row>

                    <div className="section"></div>
                    <div className="section"></div>



                    <Row>
                        <Col s={6} className="grid-example"><center><h5>Mono & Multi Compatible</h5><p>Our indoor unit is compatible for both mono and multi inverter systems, saving warehouse space and making warehouse management easier..</p></center></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        
                        <Col s={6} className="grid-example"><img src={confu} /></Col>
                    </Row>

                </div>

                <img src={limp} width="100%"  height="450px"/>

                <div className="container">

                    <center><h4 className="water">Window</h4></center>
                    <center>
                    <h5 className="price">Price : 35000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>

                    <div className="section"></div>



                    <Row>

                        <Col s={6} className='grid-example'><img className="watered" src={ac} /></Col>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><p>Window air conditioners are manufactured single monoblock

For its installation requires no special tools and knowledge

Created to fit perfectly in your window frame

Cooling Capacity: 9 000-24 000 Btu/h

Cooling only, Heat pump

Available in T1 & T3

Rotary or Piston  Compressor</p></center> </Col>
                    </Row>


                    <center><h4 className="water">Portable</h4></center>
                    <center>
                    <h5 className="price">Price : 27000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>

                    <Row>

                        <Col s={6} className='grid-example'><img className="watered" src={ac4} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><p>Single-hose

Cooling Capacity: 9 000-12 000 Btu/h

Cooling only, Heat pump and Auxiliary Electric Heat

Lowest to 0.5W Standby

Available in T1 & T3

 Inverter Compressor available

Sleep Mode

Self Evaporative System

Auto Restart Function

HEPA Filter</p></center> </Col>
                    </Row>

                    <Row>
                        <Col s={6} className="grid-example"><center><h5>0.5W Standby</h5><p>Intelligent on-off technology enables Westpoint products automatically enter energy-saving mode when standby, cut energy consumption from normal 5W to 0.5W which counts 90% of saving.</p></center></Col>
                        <Col s={6} className="grid-example"><img src={port} /></Col>
                    </Row>

                </div>

            </div>
        )
    }

}

export default Airc;