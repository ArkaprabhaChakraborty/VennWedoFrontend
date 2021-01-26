import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import {ReactComponent as Assent} from './assent.svg'

import './video.css'
const PlayPage = () => {
    let {id}  = useParams()
    return (
        <div className="video">
            <Nav/>
            <div className="videoplayer_body">
                <div className="nowplaying">
                    <video className="videoarea" src="https://vod-progressive.akamaized.net/exp=1611681153~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2864%2F14%2F364324029%2F1500370098.mp4~hmac=9fa9a67d89d5542cf37f21af7e0e25a4ecac0398ed6e794a6c89817e12f97078/vimeo-prod-skyfire-std-us/01/2864/14/364324029/1500370098.mp4?filename=video.mp4" controls></video>
                    <p className="videoTitle">Video {id}</p>
                    <div className="viewcountbar">
                        <p>135002145 views</p>
                        <Assent/>
                    </div>
                </div>
                <div className="sideband">
                    <div className="videosuggestions">
                        <img src="D:\\Private\Snow-Leopard-in-Himachal-feature" alt="" className="thumbnails"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayPage
