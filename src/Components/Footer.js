import React from 'react';
import '../Styles/Footer.css';
import facebookLogo from '../Images/facebook.png';
import pinterestLogo from '../Images/pinterest.png';
import instagramLogo from '../Images/instagram.png';
import linkedinLogo from '../Images/linkedin.png';
import mailLogo from '../Images/mail.png';

const footerElements = [
  {
    alt: 'facebook',
    imageUrl: facebookLogo,
    link: 'https://www.facebook.com/healthymood.fr/'
  },
  {
    alt: 'pinterest',
    imageUrl: pinterestLogo,
    link: 'https://www.pinterest.fr/healthymood0140/'
  },
  {
    alt: 'instagram',
    imageUrl: instagramLogo,
    link: 'https://www.instagram.com/healthymood.fr/'
  },
  {
    alt: 'linkedin',
    imageUrl: linkedinLogo,
    link: 'https://www.linkedin.com/company/19035324/'
  },
  {
    alt: 'mail',
    imageUrl: mailLogo,
    link: 'mailto:hello@healthymood.fr'
  }
];

function Footer () {
  return (
    <div className='footer-container'>
      {footerElements.map(e => {
        return (
          <a href={e.link} target='_blank' rel='noopener noreferrer' key={e.alt}>
            <div className={`footer-element ${e.alt}`} style={{ backgroundImage: `url(${e.imageUrl})` }} />
          </a>
        );
      })}
    </div>
  );
}

export default Footer;
