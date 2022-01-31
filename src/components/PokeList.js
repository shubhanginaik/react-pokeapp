import React,{useState,useEffect} from 'react';
import PokemonCard from './PokemonCard';
import Loader from './Loader';
 import  Container  from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Button from 'react-bootstrap/Button';

import axios from 'axios';


import '../App.css'

const PokeList=({favHandler,favourites})=> {
const [pokemons, setPokemons]=useState([]);
const [isLoading,setIsLoading]=useState(true);
 const [nextPokemons,setnextPokemons]=useState( "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");

useEffect(() => {
    getPokemons();
  },[]); // if we dont put [], getPokemons() method will be rendered multiple time. With [] bracket it calls it only once

const getPokemons = ()=> {
    axios.get(nextPokemons).catch(error=>{
        console.log(error);
    }).then((res) => {
    
      const fetches = res.data.results.map((p) =>
      axios.get(p.url).then((res) => res.data)
      );
      setnextPokemons(res.data.next);

      Promise.all(fetches).then((data) => {
      setPokemons((prevState)=>[...prevState, ...data]);
      setIsLoading(false);
      });
     
      });
}

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
          pokemonName={pokemon.name}
          fav={favourites.some(item=> item.name === pokemon.name)}
          favClick={()=>favHandler(pokemon)}
          />
        ))}
</Row>
</Container>
<Button variant="primary" size="lg" onClick={getPokemons}> See more</Button>
</div>
    
  )
}

export default PokeList;

