import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import ACS from '../Images/home/ACS.png';
import FRZ from '../Images/home/FRZ.png';
import REF from '../Images/home/REF.png';
import SCS from '../Images/home/SCS.png';
import WD from '../Images/home/WD.png';
import WM from '../Images/home/WM.png';
import TVS from '../Images/home/TVS.png';
import LED from '../Images/home/PANO-LED.png';
import DW from '../Images/home/DW.png'


class Cardh extends Component {

    render() {

        return (

            <div>

                <div className="section"></div>

                <h4><center>Our Products</center></h4>
                <div className="section"></div>

            
                <div className="row">
                    <div className="col s12 m4">

                        <div className="card">
                            <div className="card-image">
                                <img src={ACS} />



                                <div className="card-action">
                                    <Link to="/wp-ac">Range of Air Conditioner</Link>
                                </div>


                            </div>
                        </div>

                    </div>      


                
                    <div className="col s12 m4">

                        <div className="card">
                            <div className="card-image">
                                <img src={FRZ} />



                                <div className="card-action">
                                    <Link to="/wp-frz">Range of Freezers</Link>
                                </div>


                            </div>
                        </div>

                    </div>      
                           
                    

                    <div className="col s12 m4">

                        <div className="card">
                            <div className="card-image">
                                <img src={REF} />



                                <div className="card-action">
                                    <Link to="/wp-ref">Range of Refrigerator</Link>
                                </div>


                            </div>
                        </div>

                    </div>           
                </div>

                



                <div className="row">
                    <div className="col s6 m4">

                        <div className="card">
                            <div className="card-image">
                                <img src={SCS} />



                                <div className="card-action">
                                    <Link to="/wp-show">Range of Show Case</Link>
                                </div>


                            </div>
                        </div>

                    </div>      




                
                    <div className="col s6 m4">

                        <div className="card">
                            <div className="card-image">
                                <img src={WD} />



                                <div className="card-action">
                                    <Link to="/wp-wd">Range of Water Dispencer</Link>
                                </div>


                            </div>
                        </div>

                    </div>      
                




                
                    <div className="col s6 m4">

                        <div className="card">
                            <div className="card-image">
                                <img src={WM} />



                                <div className="card-action">
                                    <Link to="/wp-wm">Range of Washing Machines</Link>
                                </div>


                            </div>
                        </div>

                    </div>      
                </div>




                <div className="row">
                    <div className="col s6 m4">

                        <div className="card">
                            <div className="card-image">
                                <img src={TVS} />



                                <div className="card-action">
                                    <Link to="/wp-tv">Range of TVS</Link>
                                </div>


                            </div>
                        </div>

                    </div>      
                




                    <div className="col s6 m4">

                        <div className="card">
                            <div className="card-image">
                                <img src={LED} />



                                <div className="card-action">
                                    <Link to="/wp-led">Range of LED's</Link>
                                </div>


                            </div>
                        </div>

                    </div>      



                    <div className="col s6 m4">

                        <div className="card">
                            <div className="card-image">
                                <img src={WD} />



                                
                                <div className="card-action">
                                    <Link to="/wp-dw">Range of Dish Washer</Link>
                                </div>
                                


                            </div>
                        </div>

                    </div>      
                </div>



            </div>

        )
    }

}

export default Cardh;