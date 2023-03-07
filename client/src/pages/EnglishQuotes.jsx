import React, { useEffect } from 'react';
import { fetchQuotes } from '../services';

function EnglishQuotes() {
  useEffect(() => {
    async function getEngQuotesData() {
      const params = {
        method: 'getQuote',
        lang: 'en',
        format: 'json',
      };
      const res = await fetchQuotes(params);
      console.log(res);
    }
    getEngQuotesData();
  }, []);
  return <div>English Quotes</div>;
}

export default EnglishQuotes;
