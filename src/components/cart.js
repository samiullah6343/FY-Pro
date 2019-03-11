import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';

import abcd from '../Images/FOTO-3.jpg';

class Cart extends Component {

    state = {

        first_name: this.refs.first_name.value,
        last_name: this.refs.last_name.value,
        email: this.refs.email.value,
        number: this.refs.number.value,
        country: this.refs.country.value,
        address: this.refs.address.value,
        product: this.refs.product.value,
    }

    render() {

        return (

            <div>
                <img class="image" src={abcd} width="100%" height="450px" />


                <div clssName="container">

                    <div className="section"></div>

                    <div class="row">
                        <div class="col s12 m9">
                            <div class="card light-grey">
                                <div class="card-content black-text">
                                    <span class="black card-title medium">Buy The Product Online</span>

                                </div>
                                <div class="card-action">

                                    <form action="/" >


                                        <Row>

                                            <Input className="black" type="text" s={6} label="First Name" ref="first_name" validate ><Icon>account_circle</Icon></Input>
                                            <Input className="black" type="text" s={6} label="Last Name" ref="last_name" validate><Icon>account_circle</Icon></Input>
                                            <Input className="black" type="number" s={6} label="Number" ref="number" validate ><Icon>phone</Icon></Input>
                                            <Input className="black" type="email" label="Email" s={12} ref="email" validate><Icon>mode_edit</Icon></Input>
                                            <Input className="black" type="text" label="Product Name" s={12} ref="product" placeholder="Enter Same As In Website" validate><Icon>mode_edit</Icon></Input>
                                            <Input className="black" type="text" label="Country" s={12} ref="country" validate><Icon>mode_edit</Icon></Input>
                                            <Input className="black-text" s={12} defaultValue="Payment Method (Cash On Deleivery)" disabled ><Icon>announcement</Icon></Input>                                            
                                            <Input className="black-text" s={12} defaultValue="Please Enter Your Full Address Below" disabled ><Icon>announcement</Icon></Input>
                                            <Input className="black" type="textarea" label="Address" ref="address" s={12} validate><Icon>mode_edit</Icon></Input>
                                            <Button className="black"></Button>

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

export default Cart;

