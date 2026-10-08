export default function PageInfo({ title, breadcrumb }) {
  return (
    <section className="max-w-[1216px] mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 dark:text-white">
        {title}
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {breadcrumb}
      </p>
    </section>
  )
}