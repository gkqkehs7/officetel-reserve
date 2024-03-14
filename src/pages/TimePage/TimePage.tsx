import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

	const setTimeData = useSetRecoilState(timeState);

	// const [day, setDay] = useState<string>('');

	const [hour, setHour] = useState<string>('');

	// const [fullDate, setFullDate] = useState<string>('');

	const toPrev = () => {
		return navigation('/calendar');
	};

	const toNext = () => {
		// if (!day) {
		// 	return alert('오전/오후를 선택해주세요!');
		// }

		if (!hour) {
			return alert('시간을 선택해주세요!');
		}

		setTimeData(hour);

		return navigation('/check');
	};

	// const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
	// 	setDay(e.target.value);
	// };

	// 시간 선택이 변경될 때 호출되는 함수
	const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setHour(e.target.value);
	};

	// useEffect(() => {
	// 	if (day && hour) {
	// 		setFullDate(`선택하신 시간은 ${day} ${hour} 입니다`);
	// 	}
	// }, [day, hour]);

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
