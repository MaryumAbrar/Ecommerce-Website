import React from 'react'

const NewsLetter = () => {
  return (
    <section
    className="relative mt-24 flex flex-col items-center justify-center h-[50vh] bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/newsletter.jpeg')",
    }}
  >
    {/* Content */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A0B5B] mb-4">
        Get Latest Update By Subscribe<br /> Our Newsletter
      </h2>
      <button className="px-3 py-3 bg-pink-500 text-white w-[9.5em] text-left pl-7 shadow-md hover:bg-pink-600 transition">
        Shop Now
      </button>
    </div>
  </section>
  )
}

export default NewsLetter