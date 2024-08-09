export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h2>Header off auth</h2>
      {children}
    </>
  )
}
