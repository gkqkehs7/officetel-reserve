import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { dateState, floorState, timeState } from '../../recoil';
import { Container, DataText, CheckText } from './style';
import ButtonComponent from '../../components/Button/Button';
import { useState } from 'react';

const CheckPage = () => {
	const navigation = useNavigate();

	const [loading, setLoading] = useState<boolean>(false);

	const floor = useRecoilValue(floorState);
	const date = useRecoilValue(dateState);
	const time = useRecoilValue(timeState);

	const [hour, minute] = time.split(':');

	const toPrev = () => {
		return navigation('/time');
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

			await sendData();

			return navigation('/complete');
		} catch (error) {
			alert('에러');
		}
	};

	const sendData = async () => {};

	return (
		<Container>
			<DataText>
				{floor}호 {moment(date).format('YYYY년 MM월 DD일')} {hour}시 {minute}분
			</DataText>

			<CheckText>맞으면 완료버튼을 눌러주세요</CheckText>

			<ButtonComponent title={'이전'} color={'#cccccc'} onClick={toPrev} />

			<ButtonComponent title={'완료'} color={'#ffa500'} onClick={toNext} />
		</Container>
	);
};

export default CheckPage;
