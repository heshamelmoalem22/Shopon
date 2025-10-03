import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17vh;
`;

const SpinnerCircle = styled.div`
  border: 6px solid #f3f3f3; 
  border-top: 6px solid #ff9800; 
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;

  @media (max-width: 450px) {
    width: 40px;
    height: 40px;
    border-width: 4px;
  }
`;

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <SpinnerCircle />
    </SpinnerWrapper>
  );
}
