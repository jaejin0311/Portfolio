import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Jaejin</h2>
        <div className='prompt'>
          <p> A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>
              ReactJs, HTML, CSS
            </span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span>
              NodeJS
            </span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>
              JavaScript, C++, Python
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
