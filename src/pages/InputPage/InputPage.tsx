import { Container, Input, InputContainer, InputText } from './style';
import ButtonComponent from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const InputPage = () => {
	const navigation = useNavigate();

	const toNext = () => {
		return navigation('/calendar');
	};

	return (
		<Container>
			<InputContainer>
				<InputText>호실을 입력해 주세요</InputText>
				<Input placeholder="ex) 101" />
			</InputContainer>

			<ButtonComponent title={'다음'} onClick={toNext} />
		</Container>
	);
};

export default InputPage;
