import { Container } from "@/components/shared/container";
import { movieMockData } from "@/app/config/movie-moxk-data";

import { MovieDescription } from "./movie-description";
import { MovieMeta } from "./movie-meta";
import { MovieLogo } from "./movie-logo";
import { MovieCover } from "./movie-cover";
import { MovieActions } from "./movie-actions";
import { MovieNetworkLogo } from "./movie-network-logo";

export function MovieContent() {
	return (
		<div className="w-full flex flex-col lg:flex-row justify-center items-center relative">
			<MovieCover movieCoverPath="/images/movie-cover.png" />

			<Container className="grid lg:grid-cols-2 relative">
				<div className="flex flex-col items-center md:items-start lg:pt-[100px] pb-8 lg:pb-24">
					<MovieLogo logoPath="/images/movie-logo.png" persianTitle={movieMockData.persian_title} />

					<MovieMeta />

					<MovieActions />

					<MovieDescription description={movieMockData.description} />
				</div>

				<MovieNetworkLogo />
			</Container>
		</div>
	);
}
