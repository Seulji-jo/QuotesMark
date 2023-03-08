import React, { useEffect, useRef } from 'react';
import { QuotesProvider } from '../context/useQuotesContext';

function Quotes({ children, value: quotesData, onChange }) {
  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded.current) {
      onChange && onChange(quotesData);
    }
    firstMounded.current = false;
  }, [quotesData, onChange]);

  return (
    <QuotesProvider value={quotesData}>
      <>{children}</>
    </QuotesProvider>
  );
}

export default Quotes;
