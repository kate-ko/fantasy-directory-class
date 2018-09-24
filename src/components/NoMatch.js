import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/about.css'

class NoMatch extends Component {

    render() {
        return (
            <div id="home-container">
              404 Page not found
            </div>
        );
    }
}

export default NoMatch;