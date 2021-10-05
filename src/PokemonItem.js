import PokemonImage from "./PokemonImage";
import PokemonType from "./PokemonType";

const PokemonItem = ({pokemon}) => {
    return ( 
        <div className="pokemon">
            <PokemonImage pokemonName={pokemon.Name.toLowerCase()}/>
            <h2>
                {pokemon.Name}
            </h2>
            <PokemonType type1={pokemon.Type1} type2={pokemon.Type2}/>
        </div>
     );
}
 
export default PokemonItem;