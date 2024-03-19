import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { dateState, floorState, timeState } from '../../recoil';
import ButtonComponent from '../../components/Button/Button';
import { PostAxiosInstance } from '../../api/axios.method';
import Loading from '/images/Loading.png';

import { Container, DataText, CheckText, LoadingImage } from './style';

const CheckPage = () => {
	const navigation = useNavigate();

	const { encryptedOfficetelId } = useParams();

	const [loading, setLoading] = useState<boolean>(false);

	const floor = useRecoilValue(floorState);
	const date = useRecoilValue(dateState);
	const time = useRecoilValue(timeState);

	const [hour, minute] = time.split(':');

	const toPrev = () => {
		return navigation(`/${encryptedOfficetelId}/time`);
	};

	const toNext = async () => {
		try {
			if (!floor) {
				return alert('호수를 입력하지 않았습니다');
			}

			if (!date) {
				return alert('날짜를 입력하지 않았습니다.');
			}

			if (!time) {
				return alert('시간을 입력하지 입력해주세요');
			}

			setLoading(true);

			await makeReserve();

			return navigation(`/${encryptedOfficetelId}/complete`);
		} catch (error) {
			alert('에러');
		}
	};

	const makeReserve = async () => {
		const data = {
			floor: parseInt(floor),
			reservationDate: date,
			reservationTime: time,
		};
		await PostAxiosInstance(
			`/officetels/${encryptedOfficetelId}/reserve`,
			data
		);
	};

	return (
		<Container>
			{loading ? (
				<LoadingImage src={Loading} />
			) : (
				<>
					<DataText>{floor}호</DataText>

					<DataText>
						{moment(date).format('YYYY/MM/DD')} {hour}:{minute}
					</DataText>

					<CheckText>맞으면 완료버튼을 눌러주세요</CheckText>

					<ButtonComponent title={'이전'} color={'#cccccc'} onClick={toPrev} />

					<ButtonComponent title={'완료'} color={'#ffa500'} onClick={toNext} />
				</>
			)}
		</Container>
	);
};

export default CheckPage;
