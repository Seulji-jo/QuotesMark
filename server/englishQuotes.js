const axios = require('axios');

module.exports = async({query}, res) => {
    const { data } = await axios.get(
      `https://api.forismatic.com/api/1.0/`, 
      {params: query}
    );

    if (typeof data === 'string') return res.status(400).send(data);

    const quotesData = {
      quoteText: data.quoteText.trimEnd(),
      quoteAuthor: data.quoteAuthor.trimEnd()
    }
    
    return res.status(200).send(JSON.stringify(quotesData))
}
