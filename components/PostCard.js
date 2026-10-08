import Image from "next/image"

export default function PostCard({ category, title, author, date, image, avatar }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100">

      
      <div className="relative w-full h-[240px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

     
      <div className="p-5">
        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded">
          {category}
        </span>

        <h3 className="text-lg font-semibold mt-3 mb-6 leading-snug">
          {title}
        </h3>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Image
            src={avatar}
            alt={author}
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <span>{author}</span>
          <span className="ml-auto">{date}</span>
        </div>
      </div>

    </div>
  )
}