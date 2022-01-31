import React ,{useEffect, useState}from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import PokeList from './components/PokeList';

import Layout from './components/Layout';
import Home from './components/Home';

import './App.css';
import PokeSingle from './components/PokeSingle';
import PokemonCard from './components/PokemonCard';
import FavList from './components/FavList';



const App = (pokemon) => {
  const [favourites,setFavourites]=useState([]);
  const getArray = JSON.parse(localStorage.getItem('favourites') || '0');

  useEffect(()=>{
    if(getArray != 0){
      setFavourites(getArray);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('favourites',JSON.stringify(favourites))
  },[favourites]);
  const favHandler = (pokemon) =>{
    let item = favourites.some((item) => item.id == pokemon.id);
    if(!item){
      setFavourites(prevstate=>[...prevstate,pokemon]);
      // localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
    }
    else{
      const newarray=[...favourites];
      newarray.splice(newarray.findIndex(item=>item.id == pokemon.id),
      1
      );
      setFavourites(newarray);
      // localStorage.removeItem(pokemon.name);
    }
    console.log("Wow");
  }

  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route
          path="pokelist" 
          element={<PokeList favHandler={favHandler} favourites={favourites}/>}/>
       
        <Route 
        path="favourites" 
        element={
        <FavList favHandler={favHandler} favourites={favourites}/>
      }
        /> 
         <Route path="/:pokemonName" element={<PokeSingle/>}/> 
       </Route>
     </Routes>
    </BrowserRouter>
  );
};

export default App;