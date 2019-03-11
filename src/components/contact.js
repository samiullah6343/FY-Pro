import React, { Component } from 'react';
import { Row, Input, Icon, Button } from 'react-materialize';
import Map from "./map";

class Contact extends Component {

    state = {

        first_name: this.refs.first_name.value,
        last_name: this.refs.last_name.value,
        number: this.refs.number.value,
        email: this.refs.email.value,
        country: this.refs.country.value,
        feedback: this.refs.feedback.value

    }

    render() {

        console.log(this.state);

        return (

            <div>
                <div className="section"></div>

                <Map />

                <div className="container">
                    <div class="row">
                        <div class="col s12 m9">
                            <div class="card light-grey">
                                <div class="card-content black-text">
                                    <span class="card-title medium">Contact Us</span>

                                </div>
                                <div class="card-action">

                                    <form action="/">

                                        <Row>
                                            <Input type="text" s={6} label="First Name" ref="first_name" validate ><Icon>account_circle</Icon></Input>
                                            <Input type="text" s={6} label="Last Name" ref="last_name" validate><Icon>account_circle</Icon></Input>
                                            <Input type="number" s={6} label="Number (not include -)" ref="number" validate ><Icon>phone</Icon></Input>
                                            <Input type="text" s={6} label="Country" ref="country" validate ><Icon>mode_edit</Icon></Input>
                                            <Input type="email" label="Email" s={12} ref="email" validate><Icon>mode_edit</Icon></Input>
                                            <Input className="black-text" s={12} label="Note" defaultValue="Please Leave Feedback Below" disabled ><Icon>announcement</Icon></Input>
                                            <Input type="textarea" label="Feedback" s={12} ref="feedback" validate><Icon>mode_edit</Icon></Input>
                                            <Button className="black">Submit </Button>

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

export default Contact;