import Header from "./Header";
import EachPokemon from "./poke_Info";
import Poke_Card from "./Poke_Card";
import styles from './Poke_Card.module.css';

var all_Pokemons = [];

const SearchPokemon = ({props, pokemon}) => { 
    var newPokemons = [];
    if(pokemon) {
        if(!all_Pokemons.includes(pokemon)) {
            all_Pokemons.push(pokemon)
            console.log(all_Pokemons)
        }
    }
    for(var i = 0; i < all_Pokemons.length; i++) {
        if(props) {
            if(all_Pokemons[i].name.includes(props)) {
                newPokemons.push(all_Pokemons[i]);
        }
    }
    }
    return (
        <>
            { newPokemons.map((newPoke) => <> <EachPokemon pokemon={newPoke} /> </>)}
        </>
      );
    }

export default SearchPokemon;