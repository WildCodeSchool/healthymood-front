import React, { useState, useEffect } from 'react';
import '../Styles/Footer.css';
import facebookLogo from '../Images/facebook.png';
import pinterestLogo from '../Images/pinterest.png';
import instagramLogo from '../Images/instagram.png';
import linkedinLogo from '../Images/linkedin.png';
import mailLogo from '../Images/mail.png';
import API from '../Services/API';
import { Link } from 'react-router-dom';

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
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    API.get('/generic_pages')
      .then(res => {
        setPages(res.data.data);
      })
      .catch(err => setError(err))
      .finally(setLoading(false));
  }, []);

  const pagesLinks = () => {
    return pages.map((p, index) => {  // eslint-disable-line
      if (p.published && p.display_in_footer) {
        return (<Link key={index} className='footer-link' to={`/info/${p.slug}`}>{p.title}</Link>);
      }
      return '';
    });
  };
  return (
    <>
      <div className='footer-container'>
        <div className='footer-socials'>
          {footerElements.map(e => {
            return (
              <a href={e.link} target='_blank' rel='noopener noreferrer' key={e.alt}>
                <div className={`footer-element ${e.alt}`} style={{ backgroundImage: `url(${e.imageUrl})` }} />
              </a>
            );
          })}
        </div>
        {loading ? (<div className='footer-links'>...</div>) : (
          error ? (<div className='footer-links'>erreur lors de la récupération des pages d'info</div>) : (<div className='footer-links'>{pagesLinks()}</div>)
        )}
      </div>
    </>
  );
}

export default Footer;
