import React, { useState, useEffect } from 'react';
import API from '../Services/API';
import PageContent from '../Components/PageContent';
import '../Styles/Pages.css';

const Pages = (props) => {
  const slug = props.match.params.slug;
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    if (slug) {
      API.get(`/generic_pages/${slug}`)
        .then((res) => setPage(res.data.data))
        .catch((err) => {
          setError(err);
        })
        .finally(setLoading(false));
    }
  }, [slug]);
  return (
    <div>
      {loading ? (
        'chargement...'
      ) : error ? (
        <div>
          Ooops, il semblerait qu'il y ai un problème :( <br /> cette page
          n'éxiste probablement pas !{' '}
        </div>
      ) : (
        <div className='page-article'>
          <h1>{page.title}</h1>
          <div className='article-content-container'>
            <PageContent page={page} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pages;
