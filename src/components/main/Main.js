import React from 'react';
import './main.css';
import Nav from './Nav';
import VideoGrid from './VideoGrid';
const Main = () => {
    return (
        <div className="mainapp">
            <Nav/>
            <div className="main_body">
                <VideoGrid/>
                <VideoGrid/>
                <VideoGrid/>
            </div>   
        </div>
    )
}

export default Main;