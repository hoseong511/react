import styled from 'styled-components';

const StyledA = styled.a.attrs(props => ({
  target: '_BLANK',
  rel: 'noopener noreferer'
}))`
  color: ${(props) => props.color};
`;

export default StyledA;