import { MovieEpisode } from "@/app/config/movie-moxk-data";
import { MovieCardHeader } from "./movie-card-header";

export function MovieCard({ episode }: { episode: MovieEpisode }) {
	return (
		<div className="relative grid gap-2">
			<MovieCardHeader coverPath={episode.cover} duration={episode.duration} persianTitle={episode.title} />
			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-between gap-2">
					<h3 className="text-[#CBD2D9] text-xs line-clamp-1">{episode.title}</h3>
					<span className="text-[#7B8794] text-xs">%{episode.rate}</span>
				</div>

				<div className="flex items-center gap-2">asd</div>
			</div>
		</div>
	);
}
