import React from 'react'

function Card({name,age,Rollno}){
// const {name,age,Rollno} = myObj //object destructuring
// 
return (
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
<div class="md:flex">
  <div class="md:flex-shrink-0">
    <img class="h-48 w-full object-cover md:w-48" src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1716286049~exp=1716289649~hmac=7d881aa901c73848fe6c29d366205db71cbfb3311569ed4170e6a536e551499d&w=826" alt="Placeholder"/>
  </div>
  <div class="p-8">
    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{Rollno}</a>
    <p class="mt-2 text-gray-500"></p>
    <div class="mt-4">
      <a href="#" class="text-indigo-600 hover:text-indigo-900">{age}</a>
    </div>
  </div>
</div>
</div>

)
}
export default Card