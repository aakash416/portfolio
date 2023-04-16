import React from 'react'
import "./Home.css"
import wavehand from "./img/wave hand.gif"
import profile from "./img/profile-pic.jpg"
function Home() {
    return (
        <div className='home'>
            <div className="profile-data">
                <div className='wave-hand'>
                    <img src={wavehand} alt="wave hand" />
                    <h2>Hey</h2>
                </div>
                <h1>I'm Aakash</h1>
                <h2 >I am a Full stack Development</h2>
                <p> I focus on developing user-friendly web applications that meet the client's requirements, with attention to detail, scalability, and performance.</p>
            </div>
            <div className='profile-img'>
                <img src={profile} alt="profile-pic" />
            </div>
        </div>
    )
}

export default Home