import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
	Container,
	TimeText,
	SelectContainer,
	OptionText,
	SelectOptionText,
	FullDate,
} from './style';
import ButtonComponent from '../../components/Button/Button';

const TimePage = () => {
	const navigation = useNavigate();

	const [day, setDay] = useState<string>('');

	const [hour, setHour] = useState<string>('');

	const [fullDate, setFullDate] = useState<string>('');

	const toPrev = () => {
		return navigation('/calendar');
	};

	const toNext = () => {
		return navigation('/complete');
	};

	const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setDay(e.target.value);
	};

	// 시간 선택이 변경될 때 호출되는 함수
	const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setHour(e.target.value);
	};

	useEffect(() => {
		if (day && hour) {
			setFullDate(`선택하신 시간은 ${day} ${hour}시 입니다`);
		}
	}, [day, hour]);

	return (
		<Container>
			<TimeText>원하는 시간을 선택해주세요</TimeText>

			<SelectContainer id="day" onChange={handleDayChange} value={day}>
				<OptionText value="">오전/오후</OptionText>

				<SelectOptionText>오전</SelectOptionText>

				<SelectOptionText>오후</SelectOptionText>
			</SelectContainer>

			<SelectContainer id="hour" onChange={handleHourChange} value={hour}>
				<OptionText value="">시간</OptionText>
				{[...Array(12).keys()].map((hour) => (
					<SelectOptionText key={hour} value={hour}>
						{hour}:00
					</SelectOptionText>
				))}
			</SelectContainer>

			{fullDate && <FullDate>{fullDate}</FullDate>}

			<ButtonComponent title={'이전'} onClick={toPrev} />

			<ButtonComponent title={'다음'} onClick={toNext} />
		</Container>
	);
};

export default TimePage;
