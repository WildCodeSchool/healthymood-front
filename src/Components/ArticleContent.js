import React from 'react';
import '../Styles/ArticleContent.css';
import authorImage from '../Images/author.png';
import categoryImage from '../Images/category.png';
import publishedImage from '../Images/published.png';
import article1 from '../article1.json';
import SocialMedia from './SocialMediaArticle';

function createArticle () {
  return { __html: article1.content };
}

function ArticleContent () {
  const imageSrc = require(`../Images/${article1.image}`);
  return (
    <div className='article-container'>
      <div className='article-presentation'>
        <div className='banniere' style={{ backgroundImage: `url(${imageSrc})` }} />
        <div className='article-details'>
          <div className='author-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${authorImage})` }} /><p>{article1.author_name}</p>
          </div>
          <div className='category-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${categoryImage})` }} /><p>{article1.article_category_id}</p>
          </div>
          <div className='published-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${publishedImage})` }} />{article1.updated_at !== '' ? <p>{article1.updated_at}</p> : <p>{article1.created_at}</p>}

          </div>
        </div>
      </div>
      <p className='introduction-text'>{article1.meta_description}</p>

      <div dangerouslySetInnerHTML={createArticle()} className='article-content' />
      <div className='social-media-container'>
        <h5 className=''>Merci de partager : </h5>
        <SocialMedia />
      </div>
    </div>

  );
}

export default ArticleContent;
