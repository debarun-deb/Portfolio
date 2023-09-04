import { useEffect, useState } from 'react'
import './Home.scss'
import Animated from '../AnimatedLetters/Animated'
import Profilepic from '../../assets/images/home-perfil.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['D', 'e', 'b', 'a', 'r', 'u', 'n', ' ', 'D', 'e', 'b']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _12`}>I</span>
                        <span className={`${letterClass} _13`}>&apos;m</span>

                        <span>  <Animated letterClass={letterClass} strArray={nameArray} idx={14} /></span>
                        <br />
                        <span>  <Animated letterClass={letterClass} strArray={jobArray} idx={25} /></span>
                    </h1>
                    <h2>Backend Developer / AI/ML Enthusiast </h2>
                    <Link to="/contact" className='flat-button1'>Contact Me</Link>
                </div>
                <div className='pfp-body'>
                     <img className='pfp' src={Profilepic} alt="profile-picture" />
                </div>
               
            </div>

        </>
    )
}

export default Home