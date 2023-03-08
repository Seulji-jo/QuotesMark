import React from 'react';
import { useQuotesContext } from '../context/useQuotesContext';

function KoreanQuotes() {
  const { quotesData } = useQuotesContext();
  const { quoteAuthor, quoteText } = quotesData;
  return (
    <>
      <div className="author">{quoteAuthor}</div>
      <p className="quotes">{quoteText}</p>
    </>
  );
}

export default KoreanQuotes;
