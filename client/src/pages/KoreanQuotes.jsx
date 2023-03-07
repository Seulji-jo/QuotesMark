import React, { useEffect } from 'react';
import { fetchQuotes } from '../services';

function KoreanQuotes() {
  useEffect(() => {
    async function getKorQuotesData() {
      const param = {
        apikey: 'guest',
      };
      const res = await fetchQuotes(param);
      console.log(res);
    }
    getKorQuotesData();
  });
  return <div>Korean Quotes</div>;
}

export default KoreanQuotes;
