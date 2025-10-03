import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background: #333;
  }
`;
