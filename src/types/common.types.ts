interface Officetel {
	id: string;
	userId: string;
	name: string;
	floorNum: number;
	roomNum: number;
	timeInterval: number;
	startDay: string;
	endDay: string;
	startTime: string;
	endTime: string;
	link: string;
}

interface Reserve {
	id: string;
	userId: string;
	officetelId: string;
	floor: number;
	reservationDate: string;
	reservationTime: string;
	reservation: boolean;
	complete: boolean;
}

interface Schedule {
	officetel: Officetel;
	reserve: Reserve;
}

export type { Officetel, Reserve, Schedule };
