import React from 'react';
import useQuotes from '../hooks/useQuotes';

function EnglishQuotes() {
  const params = {
    method: 'getQuote',
    lang: 'en',
    format: 'json',
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

export default EnglishQuotes;
