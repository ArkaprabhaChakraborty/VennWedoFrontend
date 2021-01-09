import React from 'react'
import './videogrid.css';
const VideoGrid = () => {
    return (
        <div className="card">
            <div className="videoArea">
                <img src = "https://media.tenor.com/images/817596d6626736251eea50f61b9492a4/tenor.gif" alt = "loading"></img>
            </div>
            <div className="videoTitle">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt = "" className="avatar"/>
                Video title
            </div>
        </div>
    )
}

export default VideoGrid;
