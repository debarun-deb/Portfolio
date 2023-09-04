import React, { useState, useEffect } from 'react';
import Animated from '../AnimatedLetters/Animated';
import SkillsPage from '../Skillspage/SkillsPage';
import './Skills.scss';
import Loader from '../Loader/Loader';
import myCV from '../../assets/CV/debarun_CV.pdf'; // Import the CV file

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 6000);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
      <div className='container skills-page'>
        <div className='text-zone'>
          <h1>
            <Animated
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's',' ','&',' ','E','x','p','e','r','i','e','n','c','e' ]}
              idx={15}
            />
          </h1>
          <p>
          I have a versatile skillset that includes <span className='tech-stack'> JavaScript, Node.js, Express.js, MongoDB, Mongoose, Python, Git, and more.</span> I am proficient in server and API development, with a strong focus on database integration. I approach challenges with confidence and curiosity, finding satisfaction in creating efficient solutions. My ongoing journey drives me to seek new opportunities for learning and growth.
          </p>
          <p>
            You can also checkout my CV by clicking the button below.
          </p>
          <button className='download-button' onClick={handleDownloadCV}>Download CV</button> {/* Add the download button */}
        </div>
        <div>
          <SkillsPage />
        </div>
      </div>
    </>
  );
};

export default Skills;
