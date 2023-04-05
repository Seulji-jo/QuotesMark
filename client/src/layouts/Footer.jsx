import React from 'react';
import { ReactComponent as NextIcon } from '../assets/icon/next_icon.svg';
import { ReactComponent as ImportIcon } from '../assets/icon/Import_light.svg';
import { useQuotesContext } from '../context/useQuotesContext';

function Footer({ captureQuotes }) {
  const { getQuotesData } = useQuotesContext();
  return (
    <footer className="footer">
      <button onClick={captureQuotes}>
        <ImportIcon />
      </button>
      <button onClick={getQuotesData}>
        NEXT
        <NextIcon />
      </button>
    </footer>
  );
}

export default Footer;
