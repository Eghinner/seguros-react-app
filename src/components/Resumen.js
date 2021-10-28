import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled';
import {primeraMayus} from '../helper.js'

// Styles
const ContenedorResumen = styled.div`
	padding: 1rem;
	text-align: center;
	color: #fff;
	background-color: #15ab92;
	margin-top: 1rem;
`;

const Resumen = ({datos}) => {

	const {marca, year, plan} = datos;

	if (marca===''||year===''||plan==='') return null;
	return (
		<ContenedorResumen>
			<h2>Resumen de cotización</h2>
			<ul>
				<li>Marca: {primeraMayus(marca)}</li>
				<li>Plan: {primeraMayus(plan)}</li>
				<li>Año del auto: {year}</li>
			</ul>
		</ContenedorResumen>
			)
}

Resumen.propTypes = {
	datos: PropTypes.object.isRequired,
}

export default Resumen