import React from 'react'
import ReactImg from '../assets/react.svg'

function ProjectCard(Props) {
  return (
    <div>
    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[400px] bg-white/20 rounded-lg shadow-lg shadow-black/10 backdrop-blur-lg border border-white/30">
  <div class="relative h-56 m-2.5 mb-[0] overflow-hidden text-white rounded-md">
    <img src={Props.image} alt="card-image" className='rounded-md h-full w-full' />

  </div>
  <div class="p-3 py-0">
    <div class="flex items-center mb-2">
      <h6 class="text-slate-800 text-xl font-semibold mt-2">
        {Props.title}
      </h6>
 
      <div class="flex items-center gap-0 5 ml-auto hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          class="w-5 h-5 text-yellow-600">
          <path fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"></path>
        </svg>
        <span class="text-slate-600 ml-1.5">5.0</span>
      </div>
    </div>
    
    <p class="text-slate-600 text-left font-light">
      {Props.description}
    </p>
  </div>
 
  <div class="group my-1 inline-flex flex-wrap justify-center items-center gap-2">
    {/* <div className="bg-transparent rounded-full pointer-events-none border border-2 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
    <img src={ReactImg} alt="" className="w-4 h-4 " />
    </div>
    <div className="bg-transparent rounded-full pointer-events-none border border-2 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
    <img src={ReactImg} alt="" className="w-4 h-4 " />
    </div>
    <div className="bg-transparent rounded-full pointer-events-none border border-2 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
    <img src={ReactImg} alt="" className="w-4 h-4 " />
    </div>
    <div className="bg-transparent rounded-full pointer-events-none border border-2 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
    <img src={ReactImg} alt="" className="w-4 h-4 " />
    </div>
    <div className="bg-transparent rounded-full pointer-events-none border border-2 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
    <img src={ReactImg} alt="" className="w-4 h-4 " />
    </div> */}
    {Props.techStack.map((tech) => (
        <div className="bg-transparent rounded-full pointer-events-none border border-2 p-1 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
    <img src={tech} alt="" className="w-8 h-8 rounded-[100%]" />
    </div>
    ))}
   
  </div>
  
  <div class="px-3 pb-4 pt-0 mt-2">
    <button class="w-full rounded-md bg-[#1a1a1a] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Reserve
    </button>
  </div>
</div> 
      
    </div>
  )
}

export default ProjectCard
