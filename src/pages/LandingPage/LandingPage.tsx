import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/Button/Button';
import { Container, LandingText, SmallText } from './style';

const LandingPage = () => {
	const navigation = useNavigate();

	const toNext = () => {
		return navigation('/floor');
	};

	return (
		<Container>
			<LandingText>블루지움오피스텔 관리실입니다</LandingText>
			<SmallText>
				셋탑교체 예약을 해주시면 기사분께서 시간에 맞춰서 방문드립니다
			</SmallText>

			<ButtonComponent title={'예약하기'} color={'#ffa500'} onClick={toNext} />
		</Container>
	);
};

export default LandingPage;
