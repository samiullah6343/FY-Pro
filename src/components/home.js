import React, { Component } from 'react';
import { Slider, Slide } from 'react-materialize';
import History from './history';
import Cardh from './card_h';
import Map from './map';

import main from '../Images/home/main.jpg'
import glass from '../Images/home/glass.jpg'
import sofa from '../Images/home/sofa.jpg'

class Home extends Component {

    render() {

        return (

            <div>

                <div>
                    <Slider>

                        <Slide
                            src={main}
                            title="Our Aim!"
                            placement="left"
                            color="black-text">
                            
                        </Slide>

                        <Slide
                            src={glass}
                            title="Our Aim!"
                            placement="left"
                            color="black-text">
                            Is To Make Your Life Stylish
                        </Slide>

                        <Slide
                            src={sofa}
                            title="Our Aim!"
                            placement="left"
                            color="black-text">
                            Is To Make You Advance
                         </Slide>

                    </Slider>
                </div>
                <div className="searchbox">
                {/* <Row>
  <Autocomplete
    title='Company'
    data={
      {
        'Apple': null,
        'Microsoft': null,
        'Google': 'http://placehold.it/250x250'
      }
    }
  />
</Row> */}

                    <center><Input type="search" s={8} placeholder="Enter Item Type like (Diswasher)" /> </center>

                </div>
                <History />
                <Cardh />
                <Map />
                <div className="section"></div>




            </div>

        )
    }

}

export default Home;