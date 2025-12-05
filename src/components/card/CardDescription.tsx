type CardDescriptionProps = {
  description: string;
};
export default function CardDescription({ description }: CardDescriptionProps) {
  return <p className="text-white/75 line-clamp-3 mt-3">{description}</p>;
}
