import { useState, useEffect } from 'react';
import { fetchQuotes } from '../services';

function useQuotes(params) {
  const [quotesData, setQuotesData] = useState({
    quoteText: '',
    quoteAuthor: '',
  });

  useEffect(() => {
    async function getQuotesData() {
      const { data } = await fetchQuotes(params);
      setQuotesData(data);
    }
    getQuotesData();
  }, []);

  return { quotesData };
}

export default useQuotes;
