import React,{useState,useEffect} from 'react';
import PokemonCard from './PokemonCard';
import Loader from './Loader';
 import  Container  from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';

import axios from 'axios';


import '../App.css'

const PokeList=()=> {
const [pokemons, setPokemons]=useState('Wow I am state');
const [isLoading,setIsLoading]=useState(true);
// const [nextList,setNextList]=useState();

useEffect(() => {
  axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
    // console.log(res.data);
    // setNextList(res.data.next);
  const fetches = res.data.results.map((p) =>
  axios.get(p.url).then((res) => res.data)
  );
  Promise.all(fetches).then((data) => {
  setPokemons(data);
  setIsLoading(false);
  });
  // console.log(pokemons);
  });
  }, []);
console.log('pokemon after state changed',pokemons)
  return (
    
<div>
  
    <Container>
      <Row 
      xs={2}
      md={4}
      lg={5} className="justify_content_between my-5 d-flex gap-3">
        {isLoading && <Loader />}

        {!isLoading &&
        pokemons.map((pokemon)=>(
          <PokemonCard 
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          />
        ))}
</Row>
</Container>
</div>
    
  )
}

export default PokeList;

