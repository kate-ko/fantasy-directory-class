import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoMatch from './NoMatch';
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        let fentitiesCategory = this.props.match.params.fentities
        let fentities = this.props.state[fentitiesCategory] 
        console.log(fentities)
        if (fentities !== undefined) {
        return (
            <div>
                <h1 id="fentities-title">{fentitiesCategory}</h1>
                <div id="fentities-container">
                    {fentities.map((f, i) => {
                        let link = `${fentitiesCategory}/${f.name}`
                        return (
                            <Link to={link} key={i}>
                                <div className="mini">
                                    <img className="directory-img" src={f.imgUrl} alt="" />
                                    <span>{f.name}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>)
        }
        else {
            return (
                <div><NoMatch/></div>
            )
        }
    }
}

export default Fentities