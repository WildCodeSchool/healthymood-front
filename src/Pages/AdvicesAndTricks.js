import React, { Component } from 'react';
import '../Styles/AdvicesAndTricks.css';
import ReactPaginate from 'react-paginate';
import SmallArticle from '../Components/SmallArticle';
import '../Styles/SmallArticle.css';
import API from '../Services/API';
import '../Styles/Paginate.css';

export default class AdvicesAndTricks extends Component {
  constructor (props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 0,
      pageCount: 1
    };
    this.handlePageClick = this
      .handlePageClick
      .bind(this);
  }

  receivedData () {
    API
      .get('/articles')
      .then(res => {
        const data = res.data.data;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
        const postData = slice.map(post =>
          <SmallArticle key={post.id} a={post} />
        );
        console.log(data);
        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
        });
      });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.receivedData();
    });
  };

  componentDidMount () {
    this.receivedData();
  }

  render () {
    return (
      <>
        <ul className='pagination-display'>
          {this.state.postData}
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
