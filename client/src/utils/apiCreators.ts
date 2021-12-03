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

export const addSong = async (songTitle: string, song: string[]) => {
    try {
        const body = {
            song_title: songTitle,
            song: song,  
        };

        const res = await axios.post('/api/songs', body, {
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