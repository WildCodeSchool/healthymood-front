import React, { Component } from 'react';
import ArticleContent from '../Components/ArticleContent';
import '../Styles/Article.css';
import API from '../Services/API';

export default class Article extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      articleIsLoading: true
    };
  }

  componentDidMount () {
    const searchOrId = this.props.match.params.slug;
    API.get(`/articles/${searchOrId}`)
      .then((res) => this.setState({ data: res.data.data, articleIsLoading: false }));
  }

  render () {
    return (
      <div className='page-article'>
        {this.state.articleIsLoading ? (<p>Chargement</p>
        ) : (
          <>
            <h1>{this.state.data.title}</h1>
            <div className='article-content-container'>
              <ArticleContent a={this.state.data} />
            </div>
          </>
        )}
      </div>
    );
  }
}
