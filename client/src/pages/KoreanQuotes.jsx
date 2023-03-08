import React from 'react';
import useQuotes from '../hooks/useQuotes';

function KoreanQuotes() {
  const params = {
    apikey: 'guest',
  };
  const { quotesData } = useQuotes(params);
  const { quoteAuthor, quoteText } = quotesData;
  return (
    <>
      <div className="author">{quoteAuthor}</div>
      <p className="quotes">{quoteText}</p>
    </>
  );
}

export default KoreanQuotes;
