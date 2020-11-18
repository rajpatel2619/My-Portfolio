import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavH extends Component {
    render() {
        return (
            <div className="h-nav" >
               <div className="h-tag">R</div>
               <div className="h-menu">
                   <ul>
                       <li><Link to="/"><i class="fas fa-home"></i></Link></li>
                       <li><Link to="/about"><i class="far fa-user"></i></Link></li>
                       <li><Link to="/skills"><i class="fas fa-trophy"></i></Link></li>
                       <li><Link to="/projects"><i class="fas fa-network-wired"></i></Link></li>
                       <li><Link to="/contact"><i class="fas fa-envelope"></i></Link></li>
                   </ul>
               </div>
            </div>
        )
    }
}

