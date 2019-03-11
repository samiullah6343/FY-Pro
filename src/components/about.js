import React, { Component } from 'react';
import { Slider, Slide } from 'react-materialize';

import Acontent from './content_a';

import place1 from '../Images/about/place1.jpg';
import borde from '../Images/about/borde.JPG';




class About extends Component {

    render() {

        return (

            <div>
                <div className="section"></div>
                <div>
                    <Slider>

                        <Slide
                            src={borde}

                            title="PRESENTATION"
                            color="black">

                        </Slide>

                        <Slide
                            src={place1}
                            title="PRESENTATION">


                        </Slide>

                        

                    </Slider>
                </div>

                <div className="conatiner">
                    <center>
                        <p>Compagnie Française d’Etudes et d’Entreprises (CFEE) -WESTPOINT INTERNATIONAL is part of a family</p>

                        <p>Group established in Bordeaux (FRANCE) since the 18th century when</p>

                        <p>Bordeaux was one of the most important European Atlantic port.</p>

                        <p>Historically dealing in Shipping & International Trading, CFEE began</p>

                        <p>its WHITE GOODS activity in 1960, when it became the sole</p>

                        <p>distributor of the THOMSON-BRANDT French Group for Africa and</p>

                        <p>Middle East markets.</p>

                        <p>In the late 70’, THOMSON-BRANDT decided to concentrate its</p>

                        <p>development on the European market and dropped their “Tropical”</p>

                        <p>line.</p>
                    </center>
                </div>

                <div className="section"></div>

                <Acontent />

            </div>
        )
    }
}

export default About;