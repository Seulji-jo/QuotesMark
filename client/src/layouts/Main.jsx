import React from 'react';
import { Outlet } from 'react-router-dom';
import useQuotes from '../hooks/useQuotes';
import Footer from './Footer';
import Quotes from './Quotes';

function Main() {
  const { quotesData, getQuotesData } = useQuotes();
  return (
    <Quotes value={{ quotesData, getQuotesData }}>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </Quotes>
  );
}

export default Main;
