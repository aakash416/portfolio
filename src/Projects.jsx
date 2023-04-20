import React from 'react'
import './Projects.css'
import Flipkart from "./img/Flipkart.png"
import calculator from "./img/calculator.png"
import weather from "./img/weather.png"
import Ecommerce from "./img/E-Commerce-Website.png"
import starkidsnepal from "./img/starkidsnepal.png"
import RebelFoods from "./img/Rebel_Foods.png"

function Projects() {
    return (
        <div className='projects'>
            <h2>Projects</h2>
            <div className="project">

                <div class="flip-card">
                    <a href="https://aakash416.github.io/starkidsnepal/">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={starkidsnepal} alt="starkidsnepal" />
                            </div>
                            <div class="flip-card-back">
                                <h1>Star kids Nepal</h1>
                                <p>Welcome to Star Kids  Montessori Preschool, Nepal</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="projec-card">
                    <a href="https://aakash416.github.io/starkidsnepal/">
                        <img src={starkidsnepal} alt="starkidsnepal" />
                    </a>
                </div>
                <div className="projec-card">
                    <a href="https://aakash416.github.io/weather/">
                        <img src={weather} alt="weather" />
                    </a>
                </div>
                <div className="projec-card">
                    <a href="https://aakash416.github.io/Calculator/">
                        <img src={calculator} alt="calculator" />
                    </a>
                </div>
                <div className="projec-card">
                    <a href="https://aakash416.github.io/Rebel_Foods/">
                        <img src={RebelFoods} alt="RebelFoods" />
                    </a>
                </div>
                <div className="projec-card">
                    <a href="https://aakash416.github.io/Flipkart/">
                        <img src={Flipkart} alt="Flipkart" />
                    </a>
                </div>
                <div className="projec-card">
                    <a href="https://aakash416.github.io/E-Commerce-Website/">
                        <img src={Ecommerce} alt="Ecommerce" />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Projects