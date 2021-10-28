import React from 'react'
import Header from './components/Header.js'
import Formulario from './components/Formulario.js'
import styled from '@emotion/styled';


// styled
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Contenedor>
      <Header
        titulo={'Cotizador de seguros'}
      />
      <ContenedorFormulario>
        <Formulario/>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
