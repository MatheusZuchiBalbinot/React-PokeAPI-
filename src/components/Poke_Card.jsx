import { useEffect, useState } from 'react';

import Header from './Header';
import EachPokemon from './poke_Info';
import styles from './Poke_Card.module.css';
import SearchPokemon from './search_Pokemon';

function Poke_Card() {
  const [list, setList] = useState([]);

  // function checkNewPokemons(newPokemon) {
  //   console.log(newPokemon);
  //   if(newPokemon) {
  //     console.log('a')
  //   }
  // }

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon/4/').then((res) => res.json()).then((data) => console.log(data)) 
    fetch('https://pokeapi.co/api/v2/pokemon?limit=35%27%27%27').then((res) => res.json()).then((data) => setList(data.results));
  }, []);

    return (
      // <>{console.log(list)} 
      <div className={styles.PokeCardDiv}>
        <div className={styles.CardsDiv}>
            {/* {checkNewPokemons()} */}
            { list.map((item) => <> <EachPokemon pokemon={item} /> <SearchPokemon pokemon={item}/> </>)}
        </div>
      </div>
      // </>
    );

}

export default Poke_Card;