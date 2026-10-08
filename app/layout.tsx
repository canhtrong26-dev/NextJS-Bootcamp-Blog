import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'
import { cookies } from "next/headers"


export default async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const theme = cookieStore.get("theme")?.value || "light"

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}