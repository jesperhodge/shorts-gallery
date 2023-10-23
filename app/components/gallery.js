'use client'

export const Gallery = () => {
  return (
    <div className="bg-white p-3 pr-0">
      <h2 className="mb-8 col-start-1 row-start-2 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
        Gallery
      </h2>
      <div className="overflow-scroll whitespace-nowrap">
        {Array.from({ length: 20 }, (x, i) => <span className="w-36 h-60 bg-gray-200 rounded mr-3 inline-block" key={`reel-${i}`} />)}
      </div>
    </div>
  )
}
