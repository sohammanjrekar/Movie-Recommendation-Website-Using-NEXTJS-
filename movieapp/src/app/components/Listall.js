import React from 'react'

const Listall = (data) => {
   
  let dataKeys = Object.values(data)
  return (
    <div>
      
<div class="max-w-2xl mx-auto">

	<div class="p-4  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-between items-center mb-4">
    
       
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
           {dataKeys.map((item,index)=>{
            return(
<li class="py-3 sm:py-4" key={index}>
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           {item.name}
                        </p>
                    </div>
                   
                </div>
            </li>
            )
           })}
            
          
        </ul>
   </div>
</div>
	
</div>
    </div>
  )
}

export default Listall
