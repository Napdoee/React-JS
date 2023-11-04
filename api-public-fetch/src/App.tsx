import { useJoke } from '@/hooks/useJoke';
import { useEffect, useState, useRef } from "react";
import { client, imgResponse } from "@/lib/axios";
import axios from "axios";

interface Movies {
  id: number;
  overview: string,
  popularity: number
  release_date: string,
  title: string
  vote_average?: number,
  vote_count?: number
}

function App() {
  const nameRef = useRef();
  let [ name, setName ] = useState('Wiwi');
  let [ isLoading, setIsLoading ] = useState(false);
  let [ movies, setMovies ] = useState<Movies[]>({});
  let { joke, loading } = useJoke(name);

  const handleClick = (e) : any => {
    e.preventDefault();
    setName(nameRef.current.value);
  }

  async function getMovie() : any {
    setIsLoading(true);
    try {
      const { data } = await client.get('/discover/movie');
      setTimeout(async () => {
        setMovies(data.results);
        console.log(data.results);
        setIsLoading(false);
      }, 500)
    } catch(e) {
      alert('There was error: \n'+e.message)
      setIsLoading(false);
    }
  }  

  async function getMovieThumbnail(id: number) : string {
    const { file_path } = await client.get(`/movie/${id}/images`).then(({data}) => data)
    .then(res => res.backdrops[0]);

    return import.meta.env.VITE_APP_BASEIMGURL+file_path
  }

  useEffect(() => {
    getMovie();
  }, []); 

  return (
    <> 
      <div className="bg-blue-100 py-20">
        <div className="w-full flex flex-wrap justify-center items-center gap-5">
          <div className="w-1/2 bg-slate-500 p-5 rounded-lg shadow-md">
            <h1 className="text-2xl mb-5"><b>{name}</b></h1> 
            {loading ? <div>Loading....</div> : ( 
              <>
                <p className="text-md text-wrap mb-5">{joke && joke.value}</p>
              </>
            )}
            <form> 
              <input ref={nameRef} className="p-2 mb-3 bg-slate-100 block rounded-lg border border-blue-500" placeholder="Input your name"/>
              <button type="submit" className="p-2 bg-slate-100 rounded-md" onClick={handleClick}>Generate Joke</button>
            </form>
          </div>
          <div className="w-full">
            {isLoading && <div>Loading</div>}
            <div className="mx-8 flex flex-wrap items-stretch justify-center">
             {movies.length > 0 && movies.map((movie, index) => (
                <div className="w-full md:w-1/2 lg:w-1/3" key={index}>
                  <div className="p-7 bg-blue-400 m-1 rounded-md h-[250px]">
                    <img src={getMovieThumbnail(movie.id).then(r => r)} alt={movie.title} />
                    <p className="text-lg font-semibold mb-2 text-slate-300">{movie.title}</p>
                    <p className="text-sm text-slate-700 truncate break-all">{movie.overview}</p>
                    <br />
                  </div>
                </div>
              ))}
            </div>
          </div>  
        </div>  
      </div>
    </>
  )
}

export default App