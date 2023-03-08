import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchQuotes } from '../services';

function useQuotes() {
  const queries = {
    en: {
      method: 'getQuote',
      lang: 'en',
      format: 'json',
    },
    kr: {
      apikey: 'guest',
    },
  };

  const pathname = useLocation().pathname.slice(1);
  console.log(pathname);
  const [quotesData, setQuotesData] = useState({
    quoteText: '',
    quoteAuthor: '',
  });

  const getQuotesData = async () => {
    const { data } = await fetchQuotes(queries[pathname]);
    console.log(data);
    setQuotesData(data);
  };

  useEffect(() => {
    setQuotesData({ quoteText: '', quoteAuthor: '' });
    getQuotesData();
  }, [pathname]);

  return { quotesData, getQuotesData };
}

export default useQuotes;
