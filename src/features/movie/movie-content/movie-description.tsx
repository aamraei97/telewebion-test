type Props = {
  description: string;
};
export function MovieDescription({ description }: Props) {
  return (
    <div className="flex text-sm mt-4">
      <p className="leading-6">
        {description}...
        <a href="#">نمایش بیشتر</a>
      </p>
    </div>
  );
}
