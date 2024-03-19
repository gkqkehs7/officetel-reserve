import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
	Container,
	TimeText,
	SelectContainer,
	OptionText,
	SelectOptionText,
} from './style';
import ButtonComponent from '../../components/Button/Button';
import { remainTime } from './remainTime';
import { timeState } from '../../recoil';
import { useSetRecoilState } from 'recoil';

const TimePage = () => {
	const navigation = useNavigate();

	const { encryptedOfficetelId } = useParams();

	const setTimeData = useSetRecoilState(timeState);

	const [hour, setHour] = useState<string>('');

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

	return (
		<Container>
			<TimeText>원하는 시간을 선택해주세요</TimeText>
			{/* 
			<SelectContainer id="day" onChange={handleDayChange} value={day}>
				<OptionText value="">오전/오후</OptionText>

				<SelectOptionText>오전</SelectOptionText>

				<SelectOptionText>오후</SelectOptionText>
			</SelectContainer> */}

			<SelectContainer id="hour" onChange={handleHourChange} value={hour}>
				<OptionText value="">시간</OptionText>
				{remainTime.map((hour) => (
					<SelectOptionText key={hour} value={hour}>
						{hour}
					</SelectOptionText>
				))}
			</SelectContainer>

			{/* {fullDate && <FullDate>{fullDate}</FullDate>} */}

			<ButtonComponent title={'이전'} color={'#cccccc'} onClick={toPrev} />

			<ButtonComponent title={'다음'} color={'#ffa500'} onClick={toNext} />
		</Container>
	);
};

export default TimePage;
