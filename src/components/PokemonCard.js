import React from 'react';
import Card from 'react-bootstrap/Card';

const PokemonCard = ({name,image}) => {
    return (
      <div>
        <Card bg="dark" text="light" key={name}>
          <Card.Header className="card_title">{name}</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={image} />
          </Card.Body>
        </Card>
      </div>
    );
};

export default PokemonCard;