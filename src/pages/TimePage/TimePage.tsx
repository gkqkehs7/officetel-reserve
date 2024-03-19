import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
	Container,
	TimeText,
	SelectContainer,
	OptionText,
	SelectOptionText,
} from './style';
import ButtonComponent from '../../components/Button/Button';
import { dateState, timeState } from '../../recoil';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { GetAxiosInstance } from '../../api/axios.method';

const TimePage = () => {
	const navigation = useNavigate();

	const { encryptedOfficetelId } = useParams();

	const setTimeData = useSetRecoilState(timeState);

	const date = useRecoilValue(dateState);
	const [hour, setHour] = useState<string>('');
	const [remainTimes, setRemainTimes] = useState<string[]>([]);

	const toPrev = () => {
		return navigation(`/${encryptedOfficetelId}/calendar`);
	};

	const toNext = () => {
		if (!hour) {
			return alert('시간을 선택해주세요!');
		}

		setTimeData(hour);

		return navigation(`/${encryptedOfficetelId}/check`);
	};

	// 시간 선택이 변경될 때 호출되는 함수
	const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setHour(e.target.value);
	};

	// 해당 날짜의 남은 날짜 계산 함수
	const getRemainTimes = async () => {
		const response = await GetAxiosInstance(
			`/officetels/${encryptedOfficetelId}/reserves?date=${date}`
		);

		setRemainTimes(response.data.data);
	};

	useEffect(() => {
		getRemainTimes();
	}, []);

	return (
		<Container>
			{remainTimes.length > 0 ? (
				<TimeText>예약할 시간을 선택해주세요</TimeText>
			) : (
				<TimeText>가능한 시간이 없습니다</TimeText>
			)}

			<SelectContainer id="hour" onChange={handleHourChange} value={hour}>
				<OptionText value="">시간</OptionText>
				{remainTimes.map((remainTime) => (
					<SelectOptionText key={remainTime} value={remainTime}>
						{remainTime}
					</SelectOptionText>
				))}
			</SelectContainer>

			<ButtonComponent
				title={'날짜 재선택'}
				color={'#cccccc'}
				onClick={toPrev}
			/>

			<ButtonComponent title={'다음'} color={'#ffa500'} onClick={toNext} />
		</Container>
	);
};

export default TimePage;
