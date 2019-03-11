import React, { Component } from 'react';
import { Footer } from 'react-materialize';
import {Link} from 'react-router-dom';


class Foot extends Component {

    render() {

            let year = new Date().getFullYear()
        return (

            <div>
                <Footer copyrights="Your Trust Is Our Goal"

                    links={
                        <ul>
                            <li><h5 className="white-text text-lighten-3">Share Us On</h5></li>
                            <div className="section"></div>
                            <li><Link className="white-text text-lighten-3" to="https://www.facebook.com/groups/saylanifsd">Facebook</Link></li>
                            <li><Link className="white-text text-lighten-3" to="https://www.twitter.com">Twitter</Link></li>
                            <li><Link className="white-text text-lighten-3" to="https://www.instagram.com">Instagram</Link></li>
                            <li><Link className="white-text text-lighten-3" to="https://www.youtube.com">youtube</Link></li>
                        </ul>
                    }
                    className='black example'
                >
                    <p className="white-text text-lighten-3">copyright &copy; {year}. All rights reserved.</p>
                </Footer>;
            </div>

        )
    }

}

export default Foot;