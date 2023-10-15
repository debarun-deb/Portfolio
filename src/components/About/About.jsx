import './About.scss'
import Animated from '../AnimatedLetters/Animated'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faHtml5, faJsSquare, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from '../Loader/Loader'
import myCV from '../../assets/CV/debarun_CV.pdf';

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

  const handleDownloadCV = () => {
    // Trigger the download of the imported CV file
    const anchor = document.createElement('a');
    anchor.href = myCV;
    anchor.download = 'my_cv.pdf'; // Specify the download file name
    anchor.click();
  };

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
        Hello! I'm a dedicated backend developer with a passion for building efficient systems . My skills include <span className='skills-section'>JavaScript, Node.js, Express.js, MongoDB, Mongoose, Python, Git, and more,</span> with a strong focus on server, API, and database integration. I'm eager to explore the world of AI and machine learning, leveraging my strong backend foundation to drive innovation and create impactful solutions. Check out my CV for more details.
        </p>
          <button className='download-button' onClick={handleDownloadCV}>Download CV</button> {/* Add the download button */}
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