import React, { Component } from 'react';
import '../Styles/AdvicesAndTricks.css';
import ReactPaginate from 'react-paginate';
import SmallArticle from '../Components/SmallArticle';
import '../Styles/SmallArticle.css';
import '../Styles/Paginate.css';

export default class AdvicesAndTricks extends Component {
  constructor (props) {
    super(props);
    this.state = {
      offset: 0,
      perPage: 9,
      currentPage: 0,
      pageCount: 1
    };
    this.handlePageClick = this
      .handlePageClick
      .bind(this);
  }

  receivedData () {
    const articles = this.props.data;
    const sliceArticles = articles.slice(this.state.offset, this.state.offset + this.state.perPage);
    this.setState({
      pageCount: Math.ceil(articles.length / this.state.perPage),
      sliceArticles
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset
    }, () => {
      this.receivedData();
    });
  };

  componentDidMount () {
    this.receivedData();
  }

  componentDidUpdate (prevProps) {
    if (this.props.data !== prevProps.data) {
      this.receivedData();
      this.setState({ currentPage: 0, offset: 0 });
    }
  }

  render () {
    return (
      <>
        <ul className='pagination-display'>
          {this.state.sliceArticles && this.state.sliceArticles.map(article => {
            return (
              <div key={article.id}>
                <SmallArticle a={article} />
              </div>

            );
          })}

        </ul>
        <ReactPaginate
          previousLabel='prev'
          nextLabel='next'
          breakLabel='...'
          breakClassName='break-me'
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName='pagination'
          subContainerClassName='pages pagination'
          activeClassName='active'
        />
      </>
    );
  }
}
