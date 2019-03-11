import React, { Component } from 'react';
import { Row, Input, Icon, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

import post from "../Images/post.jpg";

class Profile extends Component {

    state = {

        email : this.refs.email.value,
        password : this.refs.password.value
    }

    render() {

        return (

            <div>
                <div className="section"></div>
                <img src={post} width="100%" height="460px" />

                <div className="container">
                    <form>
                        <center>
                            <p>Your customer space makes it possible to consult the orders carried out and to exchange documents related to the various models. You must be connected to reach your customer space.</p>

                            <div className="section"></div>
                            <h4>Sign In</h4>
                            <div className="section"></div>

                            <Row>
                                <Input type="email" s={8} ref="email" validate><Icon>account_circle</Icon></Input>
                                <Input type="password" s={8} ref= "password" validate><Icon>mode_edit</Icon></Input>
                            </Row>

                            <center><Button className="black">Log In</Button></center>
                            <div className="section"></div>

                            <Link to="/register">Register</Link>
                                
                        </center>
                    </form>
                </div>
            </div>

        )
    }

}

export default Profile;