import React from 'react';
import { Outlet } from 'react-router-dom';
import html2canvas from 'html2canvas';
import useQuotes from '../hooks/useQuotes';
import Footer from './Footer';
import Quotes from './Quotes';

function Main() {
  const { quotesData, getQuotesData } = useQuotes();

  const captureQuotes = () => {
    const capturePage = document.querySelector('.main');
    html2canvas(capturePage).then(canvas => {
      const imgUri = canvas.toDataURL('image/jpeg');
      const fileName = `${quotesData.quoteAuthor} Quotes.jpg`;
      downloadURI(imgUri, fileName);
    });
  };

  const downloadURI = (uri, fileName) => {
    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.href = uri;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const copyQuotes = async () => {
    const quotes = `${quotesData.quoteText} -${quotesData.quoteAuthor}=`;

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(quotes);
        alert('클립보드에 복사되었습니다.');
      } catch (error) {
        alert('복사를 다시 시도해 주세요');
      }
    } else {
      alert('복사가 지원되지 않는 브라우저입니다.');
    }
  };

  return (
    <Quotes value={{ quotesData, getQuotesData }}>
      <main className="main">
        <Outlet />
      </main>
      <Footer captureQuotes={captureQuotes} copyQuotes={copyQuotes} />
    </Quotes>
  );
}

export default Main;
