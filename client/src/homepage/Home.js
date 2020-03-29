import React, { Component } from 'react';
import '../homepage/Home.css';
import HomeSearchBar from '../search/HomeSearchBar.js';
import HomePreview from '../homepage/HomePreview.js'

class Home extends Component {
   
    render() { 
        return ( 
            <div className="home">
                <div className="pencils">
                    <HomeSearchBar/>
                </div>
                <div className="spacing"></div>
                    <HomePreview/>
            </div>
        );
    }
}
 
export default Home;