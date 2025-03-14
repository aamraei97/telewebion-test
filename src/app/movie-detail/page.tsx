import { MovieContent } from "@/features/movie/movie-content";
import { MovieSeries } from "@/features/movie/movie-series";

export default function MovieDetailPage() {
	return (
		<div className="flex flex-col pb-10">
			<MovieContent />
			<MovieSeries />
		</div>
	);
}
