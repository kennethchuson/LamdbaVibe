import axios from 'axios';

export const getSongs = async () => {
  try {
    const res = await axios.get('/api/songs', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(res);
  }
  catch(err) {
    console.error(err);
  }
};