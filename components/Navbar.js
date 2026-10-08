"use client"
import Image from "next/image"
import Link from "next/link"


export default function Navbar() {

  const toggleTheme = () => {
    const current = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1]

    const newTheme = current === "dark" ? "light" : "dark"
    document.cookie = `theme=${newTheme}; path=/`
    window.location.reload()
  }

  return (
    <nav className="w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-[1216px] mx-auto flex items-center justify-between py-6 px-4">

        <div className="flex items-center gap-2">
          <Image
            src="/Union.png"
            alt="MetaBlog"
            width={40}
            height={40}
          />
          <span className="text-xl font-semibold dark:text-white">MetaBlog</span>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">
          <li><Link className="hover:text-green-400" href="/">Home</Link></li>
          <li><Link className="hover:text-green-400" href="/blog">Blog</Link></li>
          <li><Link className="hover:text-green-400" href="/single-post">Single Post</Link></li>
          <li><Link className="hover:text-green-400" href="/pages">Pages</Link></li>
          <li><Link className="hover:text-green-400" href="/contact">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 bg-gray-100 dark:bg-gray-800 dark:text-white rounded text-sm w-40"
          />
          <button
            onClick={toggleTheme}
            className="w-12 h-7 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center px-1"
          >
            <span className="w-5 h-5 bg-white dark:bg-yellow-400 rounded-full"></span>
          </button>
        </div>

      </div>
    </nav>
  )
}