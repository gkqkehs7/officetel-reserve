import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonComponent from '../../components/Button/Button';
import { GetAxiosInstance } from '../../api/axios.method';
import { officetelState } from '../../recoil';
import { Container, LandingText, SmallText } from './style';
import { Officetel } from '../../types/common.types';

const LandingPage = () => {
	const navigation = useNavigate();

	const [officetel, setOfficetel] = useState<Officetel>();

	const { encryptedOfficetelId } = useParams();

	const setOfficetelData = useSetRecoilState(officetelState);

	const toNext = () => {
		return navigation(`/${encryptedOfficetelId}/floor`);
	};

	const getOfficetelInfo = async () => {
		const response = await GetAxiosInstance(
			`/officetels/${encryptedOfficetelId}`
		);

		setOfficetel(response.data.data);
		setOfficetelData(response.data.data);
	};

	useEffect(() => {
		getOfficetelInfo();
	}, []);

	return (
		<Container>
			<LandingText>{officetel?.name} 관리실입니다</LandingText>
			<SmallText>
				셋탑교체 예약을 해주시면 기사분께서 시간에 맞춰서 방문드립니다
			</SmallText>

			<ButtonComponent title={'예약하기'} color={'#ffa500'} onClick={toNext} />
		</Container>
	);
};

export default LandingPage;
