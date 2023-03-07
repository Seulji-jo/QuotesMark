const axios = require('axios');

module.exports = async(req, res) => {
    const { data } = await axios.get(
      `https://api.qwer.pw/request/helpful_text`, 
      {params: req.query}
    );
    
    if (data[0].result === 'error') {
      const errMsg = {
        '000': 'apikey 값이 존재하지 않습니다.',
        '001': 'apikey 값이 틀립니다.'
      }
      return res.status(400).send(errMsg[data[1].respond.code] ?? 'check your request');
    }
    
    const quotesWithAuthor = data[1].respond.split(/[\-\–]/);
    const quotesData = {
      quoteText: quotesWithAuthor[0].trimEnd(), 
      quoteAuthor: quotesWithAuthor[1]?.trim()
    };

    return res.status(200).send(JSON.stringify(quotesData));
}