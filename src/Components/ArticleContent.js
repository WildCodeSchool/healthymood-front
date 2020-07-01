import React from 'react';
import '../Styles/ArticleContent.css';
import authorImage from '../Images/author.png';
import categoryImage from '../Images/category.png';
import publishedImage from '../Images/published.png';
import article1 from '../article1.json';

function createArticle () {
  return { __html: article1.content };
}

function ArticleContent ({ a }) {
  return (
    <div className='article-container'>
      <div className='article-presentation'>
        <div className='banniere' style={{ backgroundImage: `url(${a.image})` }} />
        <div className='article-details'>
          <div className='author-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${authorImage})` }} /><p>{article1.author_name}</p>
          </div>
          <div className='category-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${categoryImage})` }} /><p>{a.article_category_id}</p>
          </div>
          <div className='published-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${publishedImage})` }} />{a.updated_at !== '' ? <p>{a.updated_at}</p> : <p>{article1.created_at}</p>}
          </div>
        </div>
      </div>
      <p className='introduction-text'>{a.meta_description}</p>

      <div dangerouslySetInnerHTML={createArticle()} className='article-content' />
    </div>

  );
}

export default ArticleContent;
