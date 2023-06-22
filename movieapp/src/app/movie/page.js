
import React from 'react'
import MovieCard from '../components/MovieCard';

const page = async() => {

  
    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c3108abdemshf2e4c73d0ff1f52p1176a6jsn31cebd760551',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};
const res= await fetch(url,options);
const data =await res.json();
const main_data=data.titles;

  return (
    <div className='mx-12'>
      <h1 className='text-center'>Movie/Web series Recommendation</h1>
    <div className='grid grid-cols-3 gap-3'>
{main_data.map((item)=>{
    return <MovieCard key={item.id} {...item}/>
})}
    </div>
    </div>
  )
}

export default page
