import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/SmallArticle.css';

const SmallArticle = ({ a }) => {
  return (
    <>
      <div key={a.slug} className='small-article-global-container'>
        <Link to={`/article/${a.id}`} key={a.id} className='link-article'>
          <div className='small-article-container'>
            <>
              <div className='small-article-banner-image' style={{ backgroundImage: `url('${a.image}')` }} />
              <div className='small-article-content-container'>
                <h1 className='small-article-title'>{a.title}</h1>
                {a.intro ? <p className='small-article-intro'>{a.intro}</p> : ''}
                <button className='read-more read-more-article'>
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
