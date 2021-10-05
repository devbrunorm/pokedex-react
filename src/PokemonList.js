import PokemonItem from "./PokemonItem";

const PokemonList = ({pokemons}) => {
    return ( 
        <div className="pokemon-list">
            {pokemons.slice(0,151).map((pokemon) => (
                <PokemonItem pokemon={pokemon}/>
            ))}
        </div>
     );
}
 
export default PokemonList;