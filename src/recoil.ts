import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { Officetel } from './types/common.types';

const { persistAtom } = recoilPersist();

export const officetelState = atom<Officetel>({
	key: 'officetel',
	default: {
		id: '',
		userId: '',
		name: '',
		floorNum: 0,
		roomNum: 0,
		timeInterval: 0,
		startDay: '',
		endDay: '',
		startTime: '',
		endTime: '',
		link: '',
	},
	effects_UNSTABLE: [persistAtom],
});

export const floorState = atom<string>({
	key: 'floor',
	default: '',
	effects_UNSTABLE: [persistAtom],
});

export const dateState = atom<string>({
	key: 'date',
	default: '',
	effects_UNSTABLE: [persistAtom],
});

export const timeState = atom<string>({
	key: 'time',
	default: '',
	effects_UNSTABLE: [persistAtom],
});
