export default function FeaturedPost({ category, title, author, date, image }) {
  return (
    <section className="max-w-[1216px] mx-auto px-4">
      <div
        className="relative w-full h-[450px] rounded-lg overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-10 left-10 right-10 text-white">
          <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded mb-4">
            {category}
          </span>
          <h2 className="text-xl md:text-3xl font-bold mb-4 max-w-[700px]">
            {title}
          </h2>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
              <span>{author}</span>
            </div>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </section>
  )
}