import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  align-items: center;
  background-color: ${({ color }) => color ? `var(--color-${color})` : "red"};
  max-height: 10px;
`;
