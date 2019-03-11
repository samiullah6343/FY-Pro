import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class History extends Component {

    render() {

        return (

            <div>

                <div className="container">
                
                    <Row>

                        <Col s={3} className='grid-example'><h2>1866</h2><h6>SINCE</h6></Col>
                        <Col s={3} className='grid-example'><h2>85</h2><h6>COUNTRIES</h6></Col>
                        <Col s={3} className='grid-example'><h2>874</h2><h6>PRODUCTS REFERENCE</h6></Col>
                        <Col s={3} className='grid-example'><h2>25</h2><h6>PRODUCTION SITES</h6></Col>

                    </Row>

                </div>
                
            </div>

        )
    }

}

export default History;