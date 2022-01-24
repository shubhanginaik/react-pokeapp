import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';

const Header = () => {
    return (
      <div>
        <Navbar variant="dark" className="add_padding">
          <Container>
            <Navbar.Brand href="#">PokeApp</Navbar.Brand>
            
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;