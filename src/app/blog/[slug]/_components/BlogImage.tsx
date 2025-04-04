import Image from 'next/image'

interface BlogImageInterface {
  src: string;
  label: string;
}
export function BlogImage({ src, label }: BlogImageInterface) {
  return (
    <Image src={src} alt={label}></Image>
  )
}