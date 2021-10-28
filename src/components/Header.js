import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
	background: #f3aacb;
	padding: 10px;
	font-weight: bold;
	color: #fff;
`;

const TextoHeader = styled.h1`
	font-size: 2rem;
	margin: 0;
	font-family: 'Slabo 27px';
	text-align: center;
`;

const Header = ({titulo}) => {
	return (
		<ContenedorHeader>
			<TextoHeader>{titulo}</TextoHeader>
		</ContenedorHeader>
	)
}

Header.propTypes = {
	titulo: PropTypes.string.isRequired,
}

export default Header