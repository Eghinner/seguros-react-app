import React, {useState} from 'react'
import Header from './components/Header.js'
import Formulario from './components/Formulario.js'
import Resumen from './components/Resumen.js'
import Resultado from './components/Resultado.js'
import Spinner from './components/Spinner.js'
import styled from '@emotion/styled';


// styled
const Contenedor = styled.div`
  background-color: #f8efed;
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {

  // States
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  //
  const {cotizacion, datos} = resumen;

  const [cargando, guardarCargando] = useState(false)

  return (
    <Contenedor>
      <Header
        titulo={'Cotizador de seguros'}
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando?<Spinner/>:null}

        {!cargando?
          <Resumen
            datos={datos}
          />
        :
        null
        }

        {!cargando?
          <Resultado
          cotizacion={cotizacion}
        />
        :
        null
        }

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
