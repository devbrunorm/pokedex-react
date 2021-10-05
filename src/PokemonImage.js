const PokemonImage = ({pokemonName}) => {
    return ( 
        <div>
            <img src={'images/' + pokemonName +'.png'} alt={pokemonName}/>
        </div>
     );
}
 
export default PokemonImage;