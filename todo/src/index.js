import React from 'react';
import './App.css'
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ToDo from './components/ToDo';

const StyledContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

function App() {
  return (
    <StyledContainer className="App">
     <ToDo />
    </StyledContainer>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA