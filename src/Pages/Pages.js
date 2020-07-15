import React, { useState, useEffect } from 'react';
import API from '../Services/API';

const Pages = (props) => {
  const slug = props.match.params.slug;
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    if (slug) {
      setTimeout(() => {
        API.get(`/generic_pages/${slug}`)
          .then((res) => setPage(res.data.data))
          .catch((err) => {
            setError(err);
          })
          .finally(setLoading(false));
      }, 2000);
    }
  }, []);
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
        JSON.stringify(page)
      )}
    </div>
  );
};

export default Pages;
