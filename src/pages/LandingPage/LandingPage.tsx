import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/Button/Button';
import { Container, LandingText } from './style';

const LandingPage = () => {
	const navigation = useNavigate();

	const toNext = () => {
		return navigation('/floor');
	};

	return (
		<Container>
			<LandingText>어떤건지 설명</LandingText>

			<ButtonComponent title={'예약하기'} color={'#ffa500'} onClick={toNext} />
		</Container>
	);
};

export default LandingPage;
