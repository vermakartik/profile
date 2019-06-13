import React from 'react'
import './About.css'
import {AboutText} from '../helpers'
import profile from '../assets/profile.jpg'

export default class About extends React.Component {
    render() {
        return (
        <div className="container-fluid">
            <div className="row pt-2 pb-2 pt-md-5 pb-md-5" style={{backgroundColor: '#d3d3d3'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 text-md-right text-center">
                            <img className="profile-image" src={profile}/>
                        </div>
                        <div className="col-md-8 col-12 text-md-left text-center">
                           <span className="align-bottom about-title">About Me</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row pt-4">
                    <div className="col-0 col-md-2"></div>
                    <div className="col-12 col-md-8">
                        <AboutText />
                    </div>
                    <div className="col-0 col-md-2"></div>
                </div>
            </div>
        </div>)
    }
}