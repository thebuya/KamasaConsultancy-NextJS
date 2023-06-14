import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Kamsa Consultants',
  description: 'Equipping Private and public-small and medium sized entities to build a sustainable future through customized financial and grants management education/ training and advisory services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
