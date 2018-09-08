import React from 'react';
import styled from 'styled-components';


import Header from './сomponents/Header';
import ListContainer from './сontainers/ListContainer';
import FormContainer from './сontainers/FormContainer';
import PreloaderContainer from './сontainers/PreloaderContainer';
import ErrorContainer from './сontainers/ErrorContainer';


const StyledMain = styled.main`
  background: #fff;
  width: 700px;
  margin: 50px auto;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
`;

const App = () => (
  <StyledMain>
    <Header title="React-TODO" />
    <ErrorContainer />
    <PreloaderContainer />
    <ListContainer />
    <FormContainer />
  </StyledMain>
);
export default App;
