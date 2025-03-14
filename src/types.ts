export interface Mission {
	id: string;
	title: string;
	image: string;
	premium: boolean;
	form_url: null | string;
}

export interface Category {
	id: number;
	title: string;
	short_title: string;
	is_landing: boolean;
	order: number;
	missions: Mission[];
}

export interface Banner {
	id: string;
	image: string;
	redirect: string;
	created: string;
	modified: string;
}
export interface Filter {
	catId: number;
	catTitle: string;
	active: boolean;
}
