import React from 'react';
import { FaNodeJs, FaDatabase, FaHtml5, FaCode, FaPython, FaServer, FaGit, FaJs } from 'react-icons/fa'; // Import icons from react-icons
import './SkillsPage.scss'

const SkillsPage = () => {
    // Define your skills data
    const skillsData = [
        {
            skillName: 'Node.js',
            icon: <FaNodeJs />,


        },
        {
            skillName: 'Express.js',
            icon: <FaServer />,


        },
        {
            skillName: 'MongoDB',
            icon: <FaDatabase />,


        },
        {
            skillName: 'HTML',
            icon: <FaHtml5 />,

        },
        {
            skillName: 'C++',
            icon: <FaCode />,


        },
        {
            skillName: 'Python',
            icon: <FaPython />,


        },
        {
            skillName: 'Javascript',
            icon: <FaJs />,


        },
        {
            skillName: 'Git',
            icon: <FaGit />,

        },
    ];

    return (

        <div className="skills-container">
            {skillsData.map((skill, index) => (
                <div className="skill-card" key={index}>
                    <div className="skill-icon">{skill.icon}</div>
                    <h3>{skill.skillName}</h3>
                </div>
            ))}
        </div>

    );
};

export default SkillsPage;
