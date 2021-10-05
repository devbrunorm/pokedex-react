import PokemonList from "./PokemonList";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const Home = () => {
    const [pokemons, setPokemons] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/pokemon')
        .then( res => {
            return res.json();
        })
        .then((data) => {
            setPokemons(data);
            setIsPending(false);
        })
    }, []);
    return ( 
        <div className="home">
            {isPending && <Loading />}
            {pokemons && <PokemonList pokemons={pokemons} />}
        </div>
     );
}
 
export default Home;