import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoMatch from './NoMatch';
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        const fentitiesCategory = this.props.match.params.fentities
        const fentities = this.props.state[fentitiesCategory]
        const name = this.props.match.params.name
        const fentity = fentities.filter(f => f.name.toLowerCase() === name.toLowerCase())[0]
        if (fentity !== undefined) {
            return (
                <div id="creature-container">
                    <h1>{fentity.name}</h1>
                    <img src={fentity.imgUrl} alt="" />
                    <div className="title">Power:</div>
                    <div className="power text"> {fentity.power}</div>
                    <div className="other text">{fentity.other}</div>
                    <span><Link to={"/directory/" + fentitiesCategory}>Go Back</Link></span>
                </div>
            )
        }
        else {
            return (
                <div><NoMatch/></div>
            )
        }
    }
}

export default Fentity;
