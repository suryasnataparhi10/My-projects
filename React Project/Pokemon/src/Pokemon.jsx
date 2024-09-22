import  './index.css'
import { FcSearch } from "react-icons/fc";
import { useEffect , useState} from 'react'
import { PokemonCards } from './PokemonCards'

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSeacrh] = useState("");


    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";
    
    const fetchPokemon = async() => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            // console.log((data));
            const detailedPokemonData = data.results.map(async(curData) => {
            const res = await fetch(curData.url);
            const data = await res.json();
            // console.log(data);
            return data;
            // console.log(curData.url);            
        })
            // console.log(detailedPokemonData);
            const detailedResponse = await Promise.all(detailedPokemonData);
            console.log(detailedResponse);        
            setPokemon(detailedResponse);
            setLoading(false);
            setError(error);
        }       
        catch (error) {
            console.log(error);    
            setLoading(false); 
            setError(error);       
        }        
    }
    

    useEffect(() => {
        fetchPokemon();
    } , []);

    const searchData = pokemon.filter((curPokemon) =>
        curPokemon.name.toLowerCase().includes(search.toLowerCase())
      );

    if(loading) {
        return(
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    if(error) {
        return(
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }

    
  return (
    <>
        <section className="container">
            <header>
                <h1>Lets Catch Pokemon!</h1>
            </header>

            <div className="pokemon-search">
                 <input type="text" placeholder='search Pokemon'  value={search}
                        onChange={(e) => setSeacrh(e.target.value)}
                 /><FcSearch />
            </div>

            <div>
                <ul className="cards">
                    {searchData.map((curData) => {
                        return <PokemonCards key={curData.id} pokemonData={curData} />
                    })}
                </ul>
            </div>
        </section>
    </>
  )
}
