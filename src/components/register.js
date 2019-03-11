import React, { Component } from 'react'
import { Row, Button, Icon, Input } from "react-materialize";

import abc from '../Images/Parallex.png';


class Register extends Component {

    state = {

        first_name: this.refs.first_name.value,
        last_name: this.refs.last_name.value,
        email: this.refs.email.value,
        password: this.refs.password.value,
        number: this.refs.number.value,
        country: this.refs.country.value,
        occupation: this.refs.occupation.value
    }

    render() {
        return (

            <div>

                <img class="image" src={abc} width="100%" height="450px" />


                <div clssName="container">

                    <div className="section"></div>

                    <div class="row">
                        <div class="col s12 m9">
                            <div class="card light-grey">
                                <div class="card-content black-text">
                                    <span class="black card-title medium">Create An Account</span>

                                </div>
                                <div class="card-action">

                                    <form>


                                        <Row>

                                            <Input className="black" type="text" s={6} label="First Name" ref="first_name" validate ><Icon>account_circle</Icon></Input>
                                            <Input className="black" type="text" s={6} label="Last Name" validate><Icon>account_circle</Icon></Input>
                                            <Input className="black" type="number" s={6} label="Number" validate ><Icon>phone</Icon></Input>
                                            <Input className="black" type="email" label="Email" s={12} validate><Icon>mode_edit</Icon></Input>
                                            <Input className="black" type="text" label="Country" s={12} validate><Icon>mode_edit</Icon></Input>
                                            <Input className="black" type="password" label="password" s={12} validate><Icon>mode_edit</Icon></Input>
                                            <Input className="black-text" s={12} defaultValue="Please Enter Your Occupation Below" disabled ><Icon>announcement</Icon></Input>
                                            <Input className="black" type="textarea" label="Occupation" s={12} validate><Icon>mode_edit</Icon></Input>
                                            <Button className="black">Sign Up</Button>

                                        </Row>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;