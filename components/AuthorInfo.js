import Image from "next/image"

export default function AuthorInfo({ name, bio, avatar }) {
  return (
    <section className="max-w-[1216px] mx-auto px-4 py-10">
      <div className="flex flex-col items-center text-center">

        <Image
          src={avatar}
          alt={name}
          width={120}
          height={120}
          className="rounded-full object-cover mb-6"
        />

        <h1 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
          {name}
        </h1>

        <p className="max-w-[600px] text-gray-600 dark:text-gray-400 mb-6">
          {bio}
        </p>

        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-sm">
            FB
          </a>
          <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-sm">
            TW
          </a>
          <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-sm">
            IG
          </a>
          <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-sm">
            LN
          </a>
        </div>

      </div>
    </section>
  )
}