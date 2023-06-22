import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MovieCard = (item) => {
    const {id,type,title,synopsis,releaseYear}=item.jawSummary;
    
  return (
    <>
   <Link href={`/movie/${id}`}>   
<div className="flex items-center justify-center my-3">

  <card className="relative h-[30rem] sm:h-96 w-[35rem] rounded-lg ">

     
    <Image src={item.jawSummary.backgroundImage.url} className="contrast-50 object-cover w-full h-full rounded-lg" width={400} height={300} alt={title}/>
    
   
    <div className="absolute w-full h-full bottom-0 rounded-lg flex flex-col items-center justify-center text-center">
    
    <h2 className="text-2xl text-grey-900 font-black mt-2">
         {title}
        </h2>
       

        <p className="text-lg px-14 text-gray-300 mt-10">
         {synopsis}
        </p>
        <div className="rounded-full border-2 mt-8 text-white px-3 py-2 font-black">{type}</div>


       
        <p className="text-base font-bold px-14 text-gray-300 mt-3">
        Release Year : {releaseYear}
        </p>

       

    </div>

  </card>

</div>
</Link>
    </>
  )
}

export default MovieCard
