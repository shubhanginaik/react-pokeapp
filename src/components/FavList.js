import React from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import PokemonCard from './PokemonCard';

const favList = ({favHandler,favourites}) => {
    return (
      <div>
        <Container>
          <Row
            xs={2}
            md={4}
            lg={5}
            className="justify_content_between my-5 d-flex gap-3"
          >
            {favourites.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                pokemonName={pokemon.name}
                fav={favourites.some((item) => item.name === pokemon.name)}
                favClick={() => favHandler(pokemon)}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default favList;