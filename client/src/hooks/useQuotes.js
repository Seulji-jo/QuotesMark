import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchQuotes } from '../services';

// 추후 명언 리스트를 관리해야될 상황이 있을때
// const reducer = ({ quotesList }, { type, quotesData }) => {
//   switch (type) {
//     case 'addQuotes':
//       return [...quotesList, quotesData];
//     case 'deleteQuotes':
//       return quotesList.filter(
//         quote => quote.quoteText === quotesData.quoteText
//       );
//     default:
//       return quotesList;
//   }
// };

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
    getQuotesData();
  }, []);

  return { quotesData, getQuotesData };
}

export default useQuotes;
