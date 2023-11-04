import { useState, useEffect } from 'react'
import axios from 'axios';

export const useJoke = (name) => {
  const [joke, setJoke] = useState([])
  const [loading, setLoading] = useState(false);

  async function getJoke() {
    setLoading(true)
    try {
      const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`);
      setTimeout(async () => {
        setJoke(data);
        setLoading(false)
      }, 500)
    } catch(e) {
      alert('There was error: \n'+e.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    getJoke();
  }, [name]);

  return {
    joke, 
    loading
  };
}