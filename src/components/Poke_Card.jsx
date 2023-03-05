import { useEffect, useState } from 'react';

import Header from './Header';
import EachPokemon from './poke_Info';
import styles from './Poke_Card.module.css';

function Poke_Card() {

  const [list, setList] = useState([]);

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon/4/').then((res) => res.json()).then((data) => console.log(data))
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20%27%27%27').then((res) => res.json()).then((data) => setList(data.results))
  }, []);

    return (
      <div className={styles.PokeCardDiv}>
        <div className={styles.CardsDiv}>
            { list.map((item) => <> <EachPokemon pokemon={item} /> </>)}
        </div>
      </div>
    );
}

export default Poke_Card;