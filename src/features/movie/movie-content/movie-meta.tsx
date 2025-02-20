import { movieMockData } from "@/app/config/movie-moxk-data";
import { MovieTags } from "./movie-tags";
import { useMemo } from "react";

export function MovieMeta() {
  const metaItems = useMemo(() => {
    const temp = [];

    // add countries
    if (movieMockData.countries.length > 0) {
      temp.push(movieMockData.countries.join(", "));
    }
    // calc series and episodes count
    const seriesCount = movieMockData.series.length;
    const episodesCount = movieMockData.series.reduce(
      (acc, curr) => acc + curr.episodes.length,
      0
    );
    temp.push(`${seriesCount} فصل(${episodesCount} قسمت)`);
    // add dubbed if have_dubbed is true
    if (movieMockData.have_dubbed) {
      temp.push("دوبله فارسی");
    }
    // add age limit if age_limit is not null
    if (movieMockData.age_limit) {
      temp.push(`مناسب برای بالای ${movieMockData.age_limit} سال`);
    }
    return temp.join(" . ");
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-white text-xl font-medium">{movieMockData.name}</h2>
      <p className="text-white text-xs">{metaItems}</p>
      <MovieTags tags={movieMockData.tags} />
    </div>
  );
}
