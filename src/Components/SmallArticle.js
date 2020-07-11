import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/SmallArticle.css';

const SmallArticle = ({ a }) => {
  return (
    <>
      <div key={a.slug} className='small-article-global-container'>
        <Link to={`/articles/${a.id}`} key={a.id} className='link-article'>
          <div className='small-article-container'>
            <>
              <div className='small-article-banner-image' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${a.image})` }} />
              <div className='small-article-content-container'>
                <h1 className='small-article-title'>{a.title}</h1>
                <p className='small-article-intro'>{a.content}</p>
                <button className='read-more'>
                  <p>Lire la suite</p>
                </button>
              </div>
            </>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SmallArticle;
