import { Button } from "@/components/ui/button";
import { BookmarkIcon } from "@/components/icons/bookmark";
import { DownloadIcon } from "@/components/icons/download";
import { ThumbsDownIcon } from "@/components/icons/thumbs-down";
import { ThumbsUpIcon } from "@/components/icons/thumbs-up";
import { PlayIcon } from "@/components/icons/play";
export function MovieActions() {
	return (
		<div className="flex flex-col lg:flex-row items-center gap-6 mt-8 w-full">
			<Button size="md" className="w-full md:w-auto" icon={<PlayIcon />}>
				پخش
			</Button>

			<div className="flex items-center gap-6">
				<div className="flex items-center gap-2">
					<Button icon={<DownloadIcon />} iconOnly variant="outline" />
					<Button icon={<BookmarkIcon />} iconOnly variant="outline" />
				</div>
				<div className="flex items-center gap-2">
					<Button icon={<ThumbsUpIcon />} iconOnly variant="outline" />
					<Button icon={<ThumbsDownIcon />} iconOnly variant="outline" />
				</div>
			</div>
		</div>
	);
}
