import React from 'react';
import { ReactComponent as ImportIcon } from '../assets/icon/Import_light.svg';
import { ReactComponent as CopyIcon } from '../assets/icon/Copy_light.svg';
import { ReactComponent as NextIcon } from '../assets/icon/Next_icon.svg';

import { useQuotesContext } from '../context/useQuotesContext';

function Footer({ captureQuotes, copyQuotes }) {
  const { getQuotesData } = useQuotesContext();
  return (
    <footer className="footer">
      <div className="btn-wrapper">
        <button onClick={captureQuotes}>
          <ImportIcon />
          {/* <img src={ImportIcon} alt="capture Quotes" /> */}
        </button>
        <button onClick={copyQuotes}>
          <CopyIcon />
          {/* <img src={CopyIcon} alt="copy Quotes" /> */}
        </button>
      </div>
      <button onClick={getQuotesData}>
        NEXT
        <NextIcon />
        {/* <img src={NextIcon} alt="next Quotes" /> */}
      </button>
    </footer>
  );
}

export default Footer;
