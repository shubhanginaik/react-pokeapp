import React,{useState,useEffect} from 'react';

import Loader from './Loader'
import { useParams,useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


import axios from 'axios';

const PokeSingle = () => {
    let {pokemonName} =useParams();
    let navigate=useNavigate();
    const [pokemonDetails, setpokemonDetails] = useState();
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
       axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).catch(error=>{
        console.log(error);
       }).then((res)=>{
           setpokemonDetails(res.data);
           setIsLoading(false);
       });
    },[]);

    return (
      <div className="align-middle">
        {isLoading && <Loader />}
        {!isLoading && (
          <div>
             
            <h2>{pokemonDetails.name}</h2>
            <img src={pokemonDetails.sprites.other.home.front_default} />
            <p>Height:{pokemonDetails.height * 10} cm</p>
            <p>Weight:{pokemonDetails.weight/10} kg</p>
            <div>
              <strong>
              Types:
              </strong>
              <ul>
                {pokemonDetails.types.map((item) => (
                  <li key={item.type.name}>{item.type.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <Button variant="outline-primary" size="sm" onClick={()=> navigate(-1)}>Back to list</Button>
      </div>
    );
};

export default PokeSingle;