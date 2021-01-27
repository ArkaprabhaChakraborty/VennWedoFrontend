import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import {ReactComponent as Assent} from './assent.svg'
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './video.css'
const PlayPage = () => {
    let {id}  = useParams()
    const suggestion = [
        {
            id:"1",
            name:"video1",
            cname:"channel1",
        },
        {
            id:"2",
            name:"video2",
            cname:"channel2",

        },
        {
            id:"6",
            name:"video6",
            cname:"channel6",
        },
        {
            id:"3",
            name:"video3",
            cname:"channel3",
        },
        {
            id:"4",
            name:"video4",
            cname:"channel4",
        },
        {
            id:"5",
            name:"video5",
            cname:"channel5",
        }]
    return (
        <div className="video">
            <Nav/>
            <div className="videoplayer_body">
                <div className="nowplaying">
                    <video className="videoarea" src="https://vod-progressive.akamaized.net/exp=1611681153~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2864%2F14%2F364324029%2F1500370098.mp4~hmac=9fa9a67d89d5542cf37f21af7e0e25a4ecac0398ed6e794a6c89817e12f97078/vimeo-prod-skyfire-std-us/01/2864/14/364324029/1500370098.mp4?filename=video.mp4" controls></video>
                    <p className="videoTitle">Video {id}</p>
                    <div className="viewcountbar">
                        <p>135002145 views</p>
                        <div className="actionbar">
                            <Assent fontSize="small"/>
                            <ShareIcon fontSize="large"/>
                            <FavoriteBorderIcon fontSize="large"/>
                        </div>
                    </div>
                </div>
                <div className="sideband">
                    {suggestion.map((video,i)=>(
                    <div className="suggestionflex">
                        <div className="videosuggestions">
                            <img src="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg" alt="" className="thumbnails"></img>
                        </div>
                        <div className="details">
                            <p className="videoname">{video.name}</p>
                            <div className="viewbar">
                                {video.cname}
                                <br></br>
                                1300545 Views
                            </div>
                        </div>
                    </div>
                      ))}
                </div>
            </div>
        </div>
    )
}

export default PlayPage
