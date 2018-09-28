import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
`;

/**
 * Компонент блока загрузки todo
 * @param {boolean} param.preloader состояние блока загрузки
 */
const Preloader = ({ preloader }) => (preloader ? <StyledDiv>Loading...</StyledDiv> : null);

Preloader.propTypes = {
  preloader: PropTypes.bool.isRequired,
};

export default Preloader;
