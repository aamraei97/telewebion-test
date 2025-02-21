import { Container } from "@/components/shared/container";
import { movieMockData } from "@/app/config/movie-moxk-data";

import { MovieDescription } from "./movie-description";
import { MovieMeta } from "./movie-meta";
import { MovieLogo } from "./movie-logo";
import { MovieCover } from "./movie-cover";
import { MovieActions } from "./movie-actions";

export function MovieContent() {
	return (
		<div className="w-full flex flex-col md:flex-row justify-center items-center relative">
			<MovieCover movieCoverPath="/images/movie-cover.png" />

			<Container className="grid md:grid-cols-2 relative">
				<div className="flex flex-col items-center md:items-start md:pt-[100px] pb-8 md:pb-24">
					<MovieLogo logoPath="/images/movie-logo.png" persianTitle={movieMockData.persian_title} />

					<MovieMeta />

					<MovieActions />

					<MovieDescription description={movieMockData.description} />
				</div>
			</Container>
		</div>
	);
}
