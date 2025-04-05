
interface ButtonInterface {
  label: string;
  style: string;
}
export function Button({label, style}: ButtonInterface){
  return (
    <button className={style}>{label}</button>
  )
}