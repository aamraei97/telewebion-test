import { MovieTag } from "@/interfaces/movie";
import { Tag } from "@/components/ui/tag";

type Props = {
	tags: MovieTag[];
};
export function MovieTags({ tags }: Props) {
	return (
		<div className="flex gap-2">
			{tags.map((tag) => (
				<Tag key={tag.href} href={tag.href} title={tag.title} />
			))}
		</div>
	);
}
