import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 0 20px;
`;

export const TimeText = styled.p`
	font-size: x-large;
	font-weight: bold;
`;

export const SelectContainer = styled.select`
	cursor: pointer;

	background-color: white;
	color: black;

	width: 100%;
	height: 40px;
	max-width: 500px;
	margin: 20px auto;
	border-radius: 12px;
	border: 2px solid #ffa500;

	text-align: center;
`;

export const OptionText = styled.option``;

export const SelectOptionText = styled.option``;

export const FullDate = styled.p`
	width: 100%;
	text-align: center;
`;
