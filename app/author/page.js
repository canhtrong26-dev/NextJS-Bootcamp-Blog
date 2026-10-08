import AuthorInfo from '../../components/AuthorInfo'
import PostCard from '../../components/PostCard'
import { posts } from '../../data/posts'

export default function Author() {
  const author = {
    name: "Jason Francisco",
    bio: "Meet Jason Francisco, a versatile writer and content creator who shares insights on technology, lifestyle, and travel. With years of experience in blogging, he brings fresh perspectives to every article.",
    avatar: "https://i.pravatar.cc/120?img=1"
  }

  return (
    <main className="min-h-screen">

      <AuthorInfo
        name={author.name}
        bio={author.bio}
        avatar={author.avatar}
      />

      <section className="max-w-[1216px] mx-auto px-4 pb-10">
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
      </section>

    </main>
  )
}