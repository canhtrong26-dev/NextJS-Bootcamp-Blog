import PageInfo from '../../components/PageInfo'
import FeaturedPost from '../../components/FeaturedPost'
import PostCard from '../../components/PostCard'
import AdsSpace from '../../components/AdsSpace'
import { posts } from '../../data/posts'

export default function Blog() {
  const featured = posts[0]

  return (
    <main className="min-h-screen">
      <PageInfo title="Blog" breadcrumb="Home > Blog" />

      <FeaturedPost
        category={featured.category}
        title={featured.title}
        author={featured.author}
        date={featured.date}
        image={featured.image}
      />

      <section className="max-w-[1216px] mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-6 dark:text-white">Latest Post</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              category={post.category}
              title={post.title}
              author={post.author}
              date={post.date}
              image={post.image}
              avatar={post.avatar}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border border-gray-300 dark:border-gray-600 dark:text-white px-6 py-3 rounded">
            View All Post
          </button>
        </div>
      </section>

      <AdsSpace />
    </main>
  )
}