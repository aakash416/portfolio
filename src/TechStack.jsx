import React from 'react'
import "./TechStack.css"
import { Link, Outlet } from 'react-router-dom'

function TechStack() {

    return (

        <div className='techstack'>
            <h2>Technical Skills</h2>
            <div className="button">
                <Link to={"/techStack"}><button>Front-End</button></Link>
                <Link to={"/techStack/backEnd"}><button>Back-End</button></Link>
                <Link to={"/techStack/otherTech"}><button>Other Tech</button></Link>
            </div>
            <Outlet />
        </div>
    )
}

export default TechStack