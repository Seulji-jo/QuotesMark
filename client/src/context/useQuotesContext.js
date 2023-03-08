import React, { createContext, useContext } from 'react';

const QuotesContext = createContext(undefined);

function QuotesProvider({ children, value }) {
  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
}

function useQuotesContext() {
  const context = useContext(QuotesContext);
  if (context === undefined)
    throw new Error('useQuotesContext must be used within a QuotesProvider');
  return context;
}

export { QuotesProvider, useQuotesContext };
