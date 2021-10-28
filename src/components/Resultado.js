import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const Mensaje = styled.p`
	background-color: #15ab92;
	margin-top: 2rem;
	padding: 1rem;
	text-align: center;
`;

const ResultadoCotizacion = styled.div`
	text-align: center;
	padding: 0.5rem;
	border: 1px solid #15ab92;
	background-color: #f3aacb;
	margin-top: 1rem;
	position: relative;
`;

const TextoCotizacion = styled.div`
	color: #000;
	text-transform: uppercase;
	font-weight: bold;
	padding: 1rem;
	margin: 0;
`;

const Resultado = ({cotizacion}) => {
	return (
		(cotizacion===0)?
			<Mensaje>Elige marca, año, y tipo de seguro</Mensaje>
		:
		(
			<ResultadoCotizacion>
				<TransitionGroup
					component='div'
					className="resultado"
				>
					<CSSTransition
						classNames="resultado"
						key={cotizacion}
						timeout={{enter: 500, exit: 500}}
					>
						<TextoCotizacion>El total es: ${cotizacion}</TextoCotizacion>
					</CSSTransition>
				</TransitionGroup>
			</ResultadoCotizacion>
		)

	)
}

Resultado.propTypes = {
	cotizacion: PropTypes.number.isRequired,
}

export default Resultado