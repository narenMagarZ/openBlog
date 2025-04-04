
export default function AdminLayout({children}: Readonly<{ children: React.ReactNode}>) {
  return (
    <div className="p-2">
    {children}
    </div>
  )
}