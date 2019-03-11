import React, { Component } from 'react';
import { Row, Col, Slider, Slide } from 'react-materialize';

import Wd from '../Images/wp-wd/WD-westpoint.jpg';
import bottle from '../Images/wp-wd/wd41.png';
import new1 from '../Images/wp-wd/new1.png';

class Wdispencer extends Component {

    render() {

        return (

            <div>

                <div>
                    <Slider>
                        <Slide src={Wd}></Slide>
                        <Slide src={new1}></Slide>
                    </Slider>
                </div>
                <div className="section"></div>
                <div className="container"><center><h4 className="water">Water Dispencer</h4></center>
                    <center>
                        <h5 className="price">Price : 15000 Rs/-</h5>
                        <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                    <div className="section"></div>


                    <Row>

                        <Col s={6} className='grid-example'><img className="waterd" src={bottle} /></Col>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>
                        <div className="section"></div>

                        <Col s={6} className='grid-example'><center><p>This innovative bottom loading water cooler gives you instant access<br></br> to fresh, pure icy-cold and piping hot water. It is perfect for<br></br> families seeking convenience, performance and style.</p></center> </Col>
                    </Row>
                </div>

            </div>

        )
    }

}

export default Wdispencer;