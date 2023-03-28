import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <FacebookIcon />
            <GitHubIcon />
            <LinkedInIcon />
            <p> &copy; 2023 JaejinKim</p>
        </div>
    </div>
  )
}

export default Footer
