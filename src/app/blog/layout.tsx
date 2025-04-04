
export default function BlogLayout({children}: Readonly<{ children: React.ReactNode}>) {
  return (
    <>
    <div>header</div>
    {children}
    <div>footer</div>
    </>
  )
}