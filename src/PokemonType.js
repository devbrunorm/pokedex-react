const PokemonType = ({type1, type2}) => {
    let typeDisplay = "Type:" + type1;
    if (type2 !== "") {
        typeDisplay = typeDisplay + "/"  + type2;
    }
    return ( 
        <p>{typeDisplay}</p>
     );
}
 
export default PokemonType;