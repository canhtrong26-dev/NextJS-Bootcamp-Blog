import AdsSpace from '../../components/AdsSpace'
import { posts } from '../../data/posts'
import Image from 'next/image'

export default function SinglePost() {
  const post = posts[0]

  return (
    <main className="min-h-screen">

      <article className="max-w-[800px] mx-auto px-4 py-10">

       
        <div className="mb-8">
          <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded mb-4">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 dark:text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Image
                src={post.avatar}
                alt={post.author}
                width={32}
                height={32}
                className="rounded-full object-cover"
                />
              <span>{post.author}</span>
            </div>
            <span>{post.date}</span>
          </div>
        </div>

       
        <div
          className="w-full h-[460px] rounded-sm bg-cover bg-center mb-8"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>

       
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Traveling is an enriching experience that opens up new horizons, exposes us to different cultures,
          and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming,
          especially when it comes to navigating unfamiliar places and dealing with unexpected situations.
        </p>

       
        <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-white">Research your destination</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Before you embark on your trip, take some time to research your destination. This includes
          understanding the local culture, customs, and laws, as well as identifying top attractions,
          restaurants, and accommodations.
        </p>

        
        <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-white">Plan your itinerary</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          While it is important to leave some room for spontaneity, having a rough itinerary can help you
          make the most of your trip. Identify the top things you want to see and do, and create a schedule
          that allows you to experience them without feeling rushed.
        </p>

       
        <blockquote className="border-l-4 border-blue-600 bg-gray-100 dark:bg-gray-800 p-6 italic text-gray-700 dark:text-gray-300 mb-8">
          &quot;Traveling teaches you more than any book ever could — about the world, about people, and above all, about yourself.&quot;
        </blockquote>

       
        <div
          className="w-full h-[460px] rounded-lg bg-cover bg-center mb-8"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>

        <AdsSpace />

        
        <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-white">Pack smart</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Packing can be a daunting task, but with a little planning, you can pack smart and efficiently.
          Make a list of essentials and stick to it, and consider the weather and activities at your destination.
        </p>

       
        <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-white">Stay safe</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Safety should always be a top priority when traveling. Research the safety situation at your destination,
          and take precautions to protect yourself and your belongings.
        </p>

        
        <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-white">Immerse yourself</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          One of the best things about traveling is the opportunity to immerse yourself in different cultures.
          Take the time to learn about the local customs and traditions, try new foods, and interact with locals.
        </p>

        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-white">Conclusion</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Traveling can be a transformative experience, and by following these tips, you can make the most
            of your journey. Remember to research, plan, pack smart, stay safe, and immerse yourself in your destination.
          </p>
        </div>

      </article>

    </main>
  )
}