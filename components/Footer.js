import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-[1216px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-sm text-gray-400 mb-6">
              Meta blog is a place where you can find quality articles about tech, travel and lifestyle.
            </p>
            <p className="text-sm">Email: info@jstemplate.net</p>
            <p className="text-sm">Phone: 880 123 456 789</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Archived</a></li>
              <li><a href="#">Author</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Category</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#">Lifestyle</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Travel</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Economy</a></li>
              <li><a href="#">Sports</a></li>
            </ul>
          </div>

          <div className="bg-gray-800 p-5 rounded">
            <h3 className="font-semibold mb-3 text-center">Weekly Newsletter</h3>
            <p className="text-xs text-gray-400 mb-4 text-center">
              Get blog articles delivered to your inbox every week.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-700 rounded text-sm mb-2"
            />
            <button className="w-full bg-blue-600 py-2 rounded text-sm">
              Subscribe
            </button>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/Union.png"
              alt="MetaBlog"
              width={40}
              height={40}
            />
            <div>
              <p className="font-semibold">MetaBlog</p>
              <p className="text-xs text-gray-400">© JS Template 2023. All Rights Reserved.</p>
            </div>
          </div>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}