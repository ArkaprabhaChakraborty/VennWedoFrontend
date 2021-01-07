import React,{Component} from 'react'
import './landingpage.css';
import {ReactComponent as Des} from './landingdes.svg';
import {ReactComponent as GetStarted} from './getstarted.svg';
import {Link} from 'react-router-dom';
import Polygon from './../Polygons/Polygon';
class Landingpage extends Component{
    render(){
    return (
        <div>
            <div className="body">
                <div className="des">
                    <Des/>
                </div>
                <Polygon/>
                <div className="getstarted">
                    <Link to="/login">
                    <GetStarted/>
                    </Link>
                </div>
            </div>
        </div>
    )
    }
}
export default Landingpage;
