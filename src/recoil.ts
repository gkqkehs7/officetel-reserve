import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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
