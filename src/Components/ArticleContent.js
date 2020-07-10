import React from 'react';
import '../Styles/ArticleContent.css';
import authorImage from '../Images/author.png';
import categoryImage from '../Images/category.png';
import publishedImage from '../Images/published.png';
import article1 from '../article1.json';
import axios from 'axios';
import SocialMedia from './SocialMediaArticle';

function createArticle () {
  return { __html: article1.content };
}

function ArticleContent ({ a }) {
  let user = {};
  const userId = a.user_id;
  console.log({ a });
  axios
    .get(`http://localhost:4000/users/${userId}`)
    .then(res => {
      user = res.data.data;
    });
  console.log(user);
  return (
    <div className='article-container'>
      <div className='article-presentation'>
        <div className='banniere' style={{ backgroundImage: `url(${a.image})` }} />
        <div className='article-details'>
          <div className='author-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${authorImage})` }} /><p>{user.username}</p>
          </div>
          <div className='category-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${categoryImage})` }} /><p>{a.article_category_id}</p>
          </div>
          <div className='published-container'>
            <span className='picto-container' style={{ backgroundImage: `url(${publishedImage})` }} />{a.updated_at !== '' && null ? <p>{a.updated_at}</p> : <p>{a.created_at}</p>}

          </div>
        </div>
      </div>
      <p className='introduction-text'>{a.slug}</p>
      <div dangerouslySetInnerHTML={createArticle()} className='article-content' />
      <div className='social-media-container'>
        <h5 className=''>Merci de partager : </h5>
        <SocialMedia />
      </div>
    </div>

  );
}

export default ArticleContent;
