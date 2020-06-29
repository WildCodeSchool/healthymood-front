import React from 'react';
import '../Styles/ArticleContent.css';
import authorImage from '../Images/author.png';
import categoryImage from '../Images/category.png';
import publishedImage from '../Images/published.png';
import SocialMedia from './SocialMediaArticle';

function createArticle (props) {
  return { __html: props.a.content };
}

function ArticleContent (props) {
  const imageSrc = require(`../Images/${props.a.image}`);
  return (
    <>
      <div className='article-container'>
        <div className='article-presentation'>
          <div className='banniere' style={{ backgroundImage: `url(${imageSrc})` }} />
          <div className='article-details'>
            <div className='author-container'>
              <span className='picto-container' style={{ backgroundImage: `url(${authorImage})` }} /><p>{props.a.author_name}</p>
            </div>
            <div className='category-container'>
              <span className='picto-container' style={{ backgroundImage: `url(${categoryImage})` }} /><p>{props.a.article_category_id}</p>
            </div>
            <div className='published-container'>
              <span className='picto-container' style={{ backgroundImage: `url(${publishedImage})` }} />{props.a.updated_at !== '' ? <p>{props.a.updated_at}</p> : <p>{props.a.created_at}</p>}

            </div>
          </div>
        </div>
        <p className='introduction-text'>{props.a.meta_description}</p>

        <div dangerouslySetInnerHTML={createArticle()} className='article-content' />
        <div className='social-media-container'>
          <h5 className=''>Merci de partager : </h5>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default ArticleContent;
