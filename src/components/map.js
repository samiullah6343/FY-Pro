import React, { Component } from 'react';
import {MediaBox} from 'react-materialize';
import map from '../Images/map/map.PNG';

class Map extends Component {

    render() {

        return (

            <div>
              <MediaBox src={map} caption="West Point Service In Pakistan" width="100%" height="450px"/>
            </div>

        )
    }

}

export default Map;