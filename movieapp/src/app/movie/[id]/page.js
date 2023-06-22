import Listall from '@/app/components/Listall';
import RAtingscore from '@/app/components/RAtingscore';
import React from 'react'

const page = async({params}) => {
    const id=params.id;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c3108abdemshf2e4c73d0ff1f52p1176a6jsn31cebd760551',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};
const res= await fetch(url,options);
const data =await res.json();
const main_data=data[0].details;

const {title,synopsis,releaseYear,cast,creater,logoImage,genres}=main_data;


  return (
    <>
	<div className="md:my-8 my-0 mx-auto max-w-screen-lg bg-white md:border-t-2 border-gray-400">
		
	<nav className="my-2 flex bg-gray-50 text-gray-700 border border-gray-200 py-3 px-5 rounded-lg dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center dark:text-gray-400 dark:hover:text-white">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        <a href="#" className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium dark:text-gray-400 dark:hover:text-white">NETFLIX</a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium dark:text-gray-500">{main_data.type}</span>
      </div>
    </li>
	<li aria-current="page">
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium dark:text-gray-500">{main_data.title}</span>
      </div>
    </li>
  </ol>
</nav>
		<header className="">
			<div className="flex flex-row py-14 px-20">
				<div className="flex-grow">
					<h1 className="text-3xl font-semibold">{title}</h1>
					
				</div>
				<div>
					</div>
			</div>
			<a href="#">
				<img src={main_data.backgroundImage.url} alt="Twenty Eleven" className="w-full"/>
			</a>
		</header>
		<div className="flex py-12 px-20">
			<div className="flex-grow grid grid-cols-1 gap-8 mr-20 divide-y">

				<article>
					<header>
						<h1 className="pr-20 pb-4">
							<a href="#" className="text-2xl font-semibold hover:text-blue-500">{title}</a>
						</h1>
						<div className="text-xs text-gray-600">
							<span className="">
								Release Year  </span>
							<a href="#" title="4:33 am" rel="bookmark" className="text-blue-500 font-semibold hover:underline">
								<time datetime="2008-10-17T04:33:51+00:00">{releaseYear}</time>
							</a>
						</div>
					</header>
					<div className="py-8">
						<div className="p-4 mb-6 w-max bg-gray-200">
							<img loading="lazy" className="wp-image-59" alt="Boat" src={logoImage.url} width="435" height="288"/>
							<p className="pt-4 pb-2 text-sm text-gray-600 font-serif">&mdash; {title}</p>
						</div>
						
					</div>
					
				</article>
				<article>
					<header>
						<h1 className="pr-20 pb-4 mt-12">
							<a href="#" className="text-2xl font-semibold hover:text-blue-500">Synopsis</a>
						</h1>
					
					</header>
					<div className="py-8">
						<p>
						&nbsp;&nbsp;&nbsp;&nbsp;{synopsis}
						</p>
						<p className='my-2'>
						&nbsp;&nbsp;&nbsp;&nbsp; {main_data.currentContextualSynopsis.text}
						</p>
					</div>
				
				</article>
				<article>
					<header>
						<h1 className="pr-20 pb-4 mt-12">
							<a href="#" className="text-2xl font-semibold hover:text-blue-500">Casts of {main_data.title}</a>
						</h1>
						
					</header>
					<div className="py-8">
					<Listall {...cast}/>
					</div>
					
				</article>
				<article>
					<header>
						<h1 className="pr-20 pb-4 mt-12">
							<a href="#" className="text-2xl font-semibold hover:text-blue-500">Genres of {main_data.title}</a>
						</h1>
						
					</header>
					<div className="py-8">
					<Listall {...genres}/>
					</div>
					
				</article>
				<RAtingscore/>
			</div>
			<aside className="w-48 text-sm text-gray-500">
				<h3 className="mb-2 uppercase text-xs font-mono">Archives</h3>
				<ul className="mb-8 list-square font-semibold">
					<li><a href="#" className="text-blue-500 hover:underline">October 2008</a></li>
					<li><a href="#" className="text-blue-500 hover:underline">September 2008</a></li>
					<li><a href="#" className="text-blue-500 hover:underline">June 2008</a></li>
				</ul>
				<h3 className="mb-2 uppercase text-xs font-mono">Meta</h3>
				<ul className="mb-8 list-square font-semibold">
					<li><a href="#" className="text-blue-500 hover:underline">Log in</a></li>
				</ul>
			</aside>
		</div>
		
			

		
	</div>


    </>
  )
}

export default page
