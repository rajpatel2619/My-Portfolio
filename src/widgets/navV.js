import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default class NavV extends Component {
    render() {
        return (
          
            <div className="row nav">
                <div className="col-12 tag">
                    R
                </div>
                <div className="col-12 icons">
                    <p><Link to="/"><i class="fas fa-home"></i></Link></p>
                    <p><Link to="/about"><i class="far fa-user"></i></Link></p>
                    <p><Link to="/skills"><i class="fas fa-trophy"></i></Link></p>
                    <p><Link to="/projects"><i class="fas fa-network-wired"></i></Link></p>
                    <p><Link to="/contact"><i class="fas fa-envelope"></i></Link></p>
                   
                </div>
                <div className="col-12 socials">
                    <p><a href="https://www.instagram.com/raj_patel_2619/" target="__blank"><i class="fab fa-instagram"></i></a></p>
                    <p><a href="https://www.linkedin.com/in/rajpatel2619/" target="__blank"><i class="fab fa-linkedin-in"></i></a></p>
                    <p><a href="https://github.com/rajpatel2619" target="__blank"><i class="fab fa-github"></i></a></p>
                    <p><a href="https://www.freelancer.in/u/singhrajckt" target="__blank"><i class="fab fa-facebook-f"></i></a></p>
                </div>
            </div>
        )
    }
}