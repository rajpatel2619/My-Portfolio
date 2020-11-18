import React,  {Component}  from 'react'
import { Link } from 'react-router-dom'
import '../colors'
import './home.css'
// import  '../widgets/dance'
import '../widgets/dance.css'

export default class Home extends Component {
    componentDidMount(){
    import '../widgets/dance'
    }
    render() {
        
        return (
            <div className="row home">
            <div className="col-12 col-xl-5 first-div">
               <p style={{paddingLeft:20}}>
               <span className="html-style">&lt;body&gt;</span>
                <br/><br/><br/><br/>
                <span className="html-style">&lt;h1&gt;</span>
                <br/>
                <p style={{paddingLeft:12}}><span className="tagline">Hi,<br/>I'm <span className="R">R</span>aj,<br/>CS Engineer.</span><span className="html-style">&nbsp; &lt;/h1&gt;</span> <br/>
                <span className="sub-tagline">Python, Ract & Flutter Developer</span>
                <br/><br/>
                <br/>
              
                    <Link className="contact-btn" to="/contact">Contact Me!</Link>
               
                </p> 
                <br/><br/>
                <span className="html-style">&lt;/body&gt;</span>
               </p>
                <span className="html-style">&lt;/html&gt;</span>
            </div>
            <div className="col-12 col-xl-7 second-div">
          <div className="dance">
          <canvas></canvas>
          </div>
            </div>
             </div>
            
        )
    }
}
