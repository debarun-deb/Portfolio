import './About.scss'
import Animated from '../AnimatedLetters/Animated'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faHtml5, faJsSquare, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from '../Loader/Loader'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 6000);
    setTimeout(() => {
      setLoading(false); // Set loading to false when data is loaded
    }, 1500); // Adjust the animation delay as needed
  }, []);


  return (
    <>
      <Loader loading={loading} />
    <div className='container about-page'>
   
      <div className='text-zone'>
        <h1><Animated
          letterClass={letterClass}
          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          idx={15}
        /></h1>
        <p>
        Hello! I'm a dedicated backend developer with a knack for building efficient systems and collaborating across teams to create innovative tech solutions. I approach challenges with confidence and curiosity, constantly seeking new avenues for learning and growth. As I look ahead, I'm eager to dive into the world of AI and expand my expertise further, leveraging my strong foundation in backend development to explore the endless possibilities that AI and machine learning offer. I'm excited to drive innovation and create impactful solutions in this exciting field.
        </p>
      </div>
      <div className='stage-cube-count'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faNodeJs} color="#8CC84B" />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faDatabase} color="#47A248" />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faPython} color="#3776AB" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About