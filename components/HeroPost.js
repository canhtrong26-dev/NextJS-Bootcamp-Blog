    import Image from "next/image";
export default function HeroPost() {
  return (
    <section className="max-w-[1216px] mx-auto px-4 pt-10">
      <div className="relative rounded-lg ">
        <Image 
            src="/Image.png"
            alt="Hero Post"
            width={1216}
            height={500}
            className="w-full h-[500px] object-cover"
        />
        <div className="absolute left-4 shadow-xl ml-8 right-4 md:-bottom-14 md:left-10 md:right-auto bg-white rounded-lg p-5 md:p-10 md:max-w-[600px]">
          <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded">
            Technology
          </span>
          <h2 className="text-lg md:text-2xl lg:text-3xl text-gray-900 font-bold mt-4 mb-6">
            The Impact of Technology on the Workplace: How Technology is Changing
          </h2>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Image
                src="/Image (1).png"
                alt="Author"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span>Jason Francisco</span>
            </div>
            <span>August 20, 2022</span>
          </div>
        </div>
      </div>
    </section>
  )
}   