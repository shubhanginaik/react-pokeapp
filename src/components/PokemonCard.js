import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Heart ,HeartFill} from 'react-bootstrap-icons';

const PokemonCard = ({name,image,pokemonName,type,fav,favClick}) => {
    return (
      
        <Card className={type} bg="info" text="dark" key={name}>
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{name}</Card.Title>
        {fav ? (
          <HeartFill onClick={favClick} size="30" color="red" />
        ) : (
          <Heart onClick={favClick} size="30" color="white" />
        )}
      </Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={image} />
      </Card.Body>
      <Card.Footer className="d-grid">
        <LinkContainer to={`/${pokemonName}`}>
          <Button variant="outline-light" size="sm" color="white">
            Details
          </Button>
        </LinkContainer>
      </Card.Footer>
    </Card>

    );
};

export default PokemonCard;