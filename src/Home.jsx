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
                    <p>Hey</p>
                </div>
                <h2>Hi, Im Aakash</h2>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos sunt unde maiores illo labore ipsum, reprehenderit eos, minima veniam, officiis possimus nemo quo nihil provident. Dolorem repellat tempore nulla fuga. </p>
            </div>
            <div className='profile-img'>
                <img src={profile} alt="profile-pic" />
            </div>
        </div>
    )
}

export default Home