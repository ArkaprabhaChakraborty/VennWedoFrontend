import React from 'react'
import { Link } from 'react-router-dom';
import './videogrid.css';


const VideoGrid = () => {
    const libs = [
        {
            id:"1",
            video_title:"Video 1",
            avatar:"https://www.w3schools.com/howto/img_avatar.png"
        },
        {
            id:"2",
            video_title:"Video 2",
            avatar:"https://www.w3schools.com/howto/img_avatar.png"   
        },
        {
            id:"3",
            video_title:"Video 3",
            avatar:"https://www.w3schools.com/howto/img_avatar.png"
        },
        {
            id:"4",
            video_title:"Video 4",
            avatar:"https://www.w3schools.com/howto/img_avatar.png"
        },
    ]

    return (
        <div className="maincontext">
        {libs.map((video,id)=>(
            <Link to={'/video/'  + video.id}>
            <div className="card" key={id}>
                <div className="videoArea">
                <img src = "https://media.tenor.com/images/817596d6626736251eea50f61b9492a4/tenor.gif" alt = "loading"></img>
                </div>
                <div className="videoTitle">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt = "" className="avatar"/>
                    {video.video_title}
                </div>
            </div>
        </Link>
        ))}
        </div>
    )
}

export default VideoGrid;
