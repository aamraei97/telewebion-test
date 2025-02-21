"use client";
import { useCallback, useState } from "react";

import { movieMockData } from "@/app/config/movie-mock-data";
import { Container } from "@/components/shared/container";
import { MovieCard } from "@/components/shared/movie-card";
import { Tabs } from "@/components/shared/tabs";

export function MovieSeries() {
	const [activeTab, setActiveTab] = useState(0);
	const seriesCount = movieMockData.series.length;
	const tabs = Array.from({ length: seriesCount }, (_, index) => ({
		id: index.toString(),
		label: `فصل ${index + 1}`,
	}));
	const visibleSerie = movieMockData.series[activeTab] ?? [];
	const tabChangeHandler = useCallback((tabId: string) => {
		setActiveTab(parseInt(tabId));
	}, []);

	return (
		<div className="w-full flex justify-center items-center">
			<Container>
				<div className="flex flex-col gap-5">
					<Tabs tabs={tabs} activeTab={tabs[activeTab].id} onTabChange={tabChangeHandler} />

					<div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{visibleSerie.episodes.map((episode) => (
							<MovieCard key={episode.id} episode={episode} />
						))}
					</div>
				</div>
			</Container>
		</div>
	);
}
