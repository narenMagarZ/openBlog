interface TitleInterface {
  title: string;
}
export function Title({title}: TitleInterface) {
  return (
    <h5 className="text-xl">{title}</h5>
  )
}