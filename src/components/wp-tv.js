import React, { Component } from 'react';
import { Row, Col, Slider, Slide } from 'react-materialize';


import tv from '../Images/wp-tv/TV-Westpoint.jpg';
import logotv from '../Images/wp-tv/logoTV.jpg';
import Wptv from '../Images/wp-tv/WPTV.jpg';
import tv1 from '../Images/wp-tv/tv.jpg';


class Tv extends Component {

    render() {

        return (

            <div>
                <div>
                    <Slider>
                        <Slide src={tv}></Slide>
                        <Slide src={tv1}></Slide>
                    </Slider>
                </div>
                <div className="section"></div>

                <div className="section"></div>
                <div className="container"><center><h4 className="water">Smart LED TV</h4></center>
                <center>
                    <h5 className="price">Price : 45000 Rs/-</h5>
                    <Link className="cart" to="/cart">Buy Online</Link>
                    </center>
                <div className="section"></div>

                
                <Row>

                        <Col s={6} className='grid-example'><img className="watered" src={Wptv}/></Col>
                <div className="section"></div>
                <div className="section"></div>
                <div className="section"></div>

                        <Col s={6} className='grid-example'><center><h5>ULTRA SLIM UHD SMART TV</h5><p>Designed to fit any space, our televisions has discrete lines, with a<br></br> maximum thickness of just 9.9 mm. With their ultra slim design and<br></br> their Ultra HD image quality, our television slips seamlessly into your home like a window on the world..</p></center> </Col>
                </Row>

                <div className="section"></div>

            <Row>
                <Col s={12} className="grid-example"><img src={logotv} height="150px"/></Col>
            </Row>

                </div>
            </div>

        )
    }

}

export default Tv;