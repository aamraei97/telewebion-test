export interface MovieTag {
	href: string;
	title: string;
}
export interface MovieEpisode {
	id: string;
	title: string;
	href: string;
	rate: number;
	cover: string;
	duration: string;
}
export interface Movie {
	name: string;
	tags: MovieTag[];
	description: string;
	have_dubbed: boolean;
	age_limit: number | null;
	countries: string[];
	imdb_score: number;
	persian_title: string;
	series: {
		episodes: MovieEpisode[];
	}[];
}
