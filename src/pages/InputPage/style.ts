import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 0 20px;
`;

const InputContainer = styled.div`
	justify-content: center;
	align-items: center;
	text-align: center;

	width: 100%;
	max-width: 500px;
	margin: 20px auto;
`;

const InputText = styled.p`
	font-size: x-large;
	font-weight: bold;
`;

const Input = styled.input`
	background-color: white;
	color: black;
	box-sizing: border-box;
	width: 100%;
	height: 40px;
	border: 1px;
	border: 2px solid #ffa500;
	border-radius: 10px;
	padding: 0 10px;

	font-size: large;
	text-align: center;

	&:focus {
		outline: none;
	}
`;

export { Container, InputContainer, InputText, Input };
