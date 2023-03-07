import axios from '../config/axiosConfig';

async function fetchQuotes(params) {
  try {
    return await axios.get('', { params });
  } catch (err) {
    console.log(err);
  }
}

export { fetchQuotes };
