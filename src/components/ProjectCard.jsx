import React from 'react';
import './ProjectCard.css'; // Import custom CSS for keyframes

function ProjectCard(Props) {
  return (
    <div className='group p-2 p-0 neon-border m-auto my-2 hover:my-0'>
    <div className="relative flex flex-col my-1 bg-[#1c1d1f] shadow-[0_10px_20px_rgba(0,0,0,0.6),_0_6px_6px_rgba(0,0,0,0.3)] rounded-lg w-[300px] transform transition-transform duration-300 group-hover:scale-105">
      <div className="relative h-56 m-2.5 mb-[0] overflow-hidden text-white rounded-md">
        <img src={Props.image} alt="card-image" className="rounded-md h-full w-full" />
      </div>
      <div className="p-3 py-0">
        <div className="flex items-center mb-2">
          <h6 className="text-[#00ff00] text-xl font-semibold mt-2">
            {Props.title}
          </h6>
        </div>
        <p className="text-white text-left font-light">
          {Props.description}
        </p>
      </div>
      <div className="group my-1 inline-flex flex-wrap justify-center items-center gap-2">
        {Props.techStack.map((tech, index) => (
          <div key={index} className="bg-transparent rounded-full border-2 p-1 text-center transition-all shadow-lg hover:shadow-xl">
            <img src={tech} alt="" className="w-8 h-8 rounded-full" />
          </div>
        ))}
      </div>
      <div className="px-3 pb-4 pt-0 mt-2">
        <div className="bg-[#1b1c1e] text-[#00ff00] border-2 text-center border-[#1a1a1a] hover:border-[#00ff00] w-full rounded-md bg-[#1a1a1a] py-1 px-4 text-sm text-white transition-all shadow-lg hover:shadow-2xl hover:bg-slate-700">
          View
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectCard;
