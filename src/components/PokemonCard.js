import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Heart ,HeartFill} from 'react-bootstrap-icons';

const PokemonCard = ({name,image,pokemonName,fav,favClick}) => {
    return (
      <div>
        <Card bg="dark" text="light" key={name}>
          <Card.Header className="card_title">{name}
          
          {fav?(
            <HeartFill onClick={favClick} size="30" color="red"/>
          ):
          (
            <Heart onClick={favClick} size="30" color="white"/>
          )}
          
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={image} />
            <LinkContainer to={`/${pokemonName}`}> 
            <Button variant="outline-secondary" size="sm">Details</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </div>
    );
};

export default PokemonCard;