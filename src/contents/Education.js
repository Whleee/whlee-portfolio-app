import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Computer Science" where="NUS" from="August 2019" to="Present"/>
            <Widecard title="GCE 'A' Levels" where="Dunman High School" from="2010" to="2016"/>
            </div>
        )
    }
}

export default Education
