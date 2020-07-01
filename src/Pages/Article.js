import React, { Component } from 'react';
import ArticleContent from '../Components/ArticleContent';
import '../Styles/Article.css';
import axios from 'axios';

export default class Article extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount () {
    const page = document.location.href;
    const idPage = page.substring(page.lastIndexOf('/') + 1);
    axios
      .get(`http://localhost:4000/articles/${idPage}`)
      .then(res => {
        this.setState({
          data: res.data.data
        });
      });
  }

  render () {
    return (
      <div className='page-article'>
        <h1>{this.state.data.title}</h1>
        <div className='article-content-container'>
          <ArticleContent a={this.state.data} />
        </div>
      </div>
    );
  }
}
