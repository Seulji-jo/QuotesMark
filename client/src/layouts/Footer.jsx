import React from 'react';
import { ReactComponent as NextIcon } from '../assets/icon/next_icon.svg';
import { useQuotesContext } from '../context/useQuotesContext';

function Footer() {
  const { getQuotesData } = useQuotesContext();
  return (
    <footer className="footer">
      <button onClick={getQuotesData}>
        NEXT
        <NextIcon />
      </button>
    </footer>
  );
}

export default Footer;
