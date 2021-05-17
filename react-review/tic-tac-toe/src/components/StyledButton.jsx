import styled, { css } from 'styled-components';

// props를 전달해보자
const StyledButton = styled.button`
  background: transparent;
  border-radius:3px;
  color: white;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props => props.primary && 
    css`
    background: palevioletred;
    color: white;`}
`;

export default StyledButton;