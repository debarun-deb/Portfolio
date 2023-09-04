import React, { useEffect, useState } from 'react'
import './Project.scss'
import Animated from '../AnimatedLetters/Animated'
import ProjectData from '../../data/project.json'
import Loader from '../Loader/Loader'

const Project = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 6000);
      setTimeout(() => {
        setLoading(false); // Set loading to false when data is loaded
      }, 1500); 

    }, []);
    const renderProjects = (project) => {
        return (
            <div className='images-container'>
                {
                    project.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img src={port.cover} className='project-image' alt="project1" />
                                <div className='content'>
                                    <p className='title'>
                                        {port.title}
                                    </p>
                                    <h4 className='techstack'>
                                        {port.techstack}
                                    </h4>
                                    <button className='btn' onClick={() => window.open(port.url)}>View
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }

return (
    <>
    <Loader loading={loading} />
    <div className='container project-page'>
        <h1 className='page-title'>
            <Animated
                letterClass={letterClass}
                strArray={"Projects".split("")}
                idx={15}
            />
        </h1>
        <div>{renderProjects(ProjectData.project)}</div>
    </div>
    </>
)
}

export default Project