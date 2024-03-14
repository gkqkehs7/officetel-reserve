import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 0 20px;
`;

export const DataText = styled.div`
	font-size: x-large;
	font-weight: bold;
`;

export const CheckText = styled.div`
	font-size: medium;
	margin: 10px 0;
`;

export const LoadingImage = styled.img`
	animation: ${rotateAnimation} 3s linear infinite;
`;
