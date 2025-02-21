"use client";

import { movieMockData } from "@/app/config/movie-moxk-data";
import { Container } from "@/components/shared/container";
import { MovieCard } from "@/components/shared/movie-card";
import { Tabs } from "@/components/shared/tabs";
import { useCallback, useMemo, useState } from "react";

export function MovieSeries() {
	const [activeTab, setActiveTab] = useState(0);
	const seriesCount = movieMockData.series.length;
	const tabs = Array.from({ length: seriesCount }, (_, index) => ({
		id: index.toString(),
		label: `فصل ${index + 1}`,
	}));
	const visibleSerie = useMemo(() => {
		return movieMockData.series[activeTab];
	}, [activeTab]);
	const tabChangeHandler = useCallback((tabId: string) => {
		setActiveTab(parseInt(tabId));
	}, []);
	return (
		<div className="w-full flex justify-center items-center">
			<Container>
				<div className="flex flex-col gap-5">
					<Tabs tabs={tabs} activeTab={tabs[activeTab].id} onTabChange={tabChangeHandler} />

					<div className="w-full grid grid-cols-4 gap-4">
						{visibleSerie.episodes.map((episode) => (
							<MovieCard key={episode.id} episode={episode} />
						))}
					</div>
				</div>
			</Container>
		</div>
	);
}
