import React from 'react';
import NextIcon from '../assets/icon/next_icon.svg';
import ImportIcon from '../assets/icon/Import_light.svg';
import CopyIcon from '../assets/icon/Copy_light.svg';

import { useQuotesContext } from '../context/useQuotesContext';

function Footer({ captureQuotes, copyQuotes }) {
  const { getQuotesData } = useQuotesContext();
  return (
    <footer className="footer">
      <div className="btn-wrapper">
        <button onClick={captureQuotes}>
          {/* <ImportIcon /> */}
          <img src={ImportIcon} alt="capture Quotes" />
        </button>
        <button onClick={copyQuotes}>
          {/* <CopyIcon /> */}
          <img src={CopyIcon} alt="copy Quotes" />
        </button>
      </div>
      <button onClick={getQuotesData}>
        NEXT
        {/* <NextIcon /> */}
        <img src={NextIcon} alt="next Quotes" />
      </button>
    </footer>
  );
}

export default Footer;
