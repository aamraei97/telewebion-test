import { movieMockData } from "@/app/config/movie-moxk-data";
import { Container } from "@/components/shared/container";
import { MovieCard } from "@/components/shared/movie-card";

export function MovieSeries() {
  const series = movieMockData.series[0];
  return (
    <div className="w-full flex justify-center items-center">
      <Container>
        <div className="flex flex-col gap-4">
          <div className="w-full grid grid-cols-4 gap-4">
            {series.episodes.map((episode) => (
              <MovieCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
