import React from 'react';

const JobListing = ({ job, onFilterChange }) => {
  const filterCategories = [
    { items: job.languages, type: "language" },
    { items: job.tools, type: "tool" },
    { items: [job.role], type: "role" },
    { items: [job.level], type: "level" }
  ];

  return (
    <div className={`lg:flex bg-white shadow-md rounded-lg p-6 pt-8 justify-between h-fit w-full lg:w-[950px] lg:mb-7 mb-16 ${job.featured ? 'featurebg' : ''}`}>
      <div className="lg:flex items-center pb-4">
        <div className='flex absolute lg:static'>
        <img src={job.logo} alt={`${job.company} logo`} className=" lg:static relative lg:top-0 -top-14 w-16 h-16 mr-4" />
        </div>
        <div>
          <div className="flex items-center">
            <p className="flex  text-gray-600 px-2 py-3">{job.company}</p>
            {job.new && <span className="hbg text-white text-xs font-bold px-2 py-1 rounded-full">New!</span>}
            {job.featured && <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">Featured</span>}
          </div>
          <h2 className=" flex text-lg font-bold px-2 primary-col">{job.position}</h2>
          <div className="mt-2 flex mx-2 gap-5 text-gray-700">
            <p>{job.postedAt}</p>
            <p>•</p>
            <p>{job.contract}</p>
            <p>•</p>
            <p>{job.location}</p>
          </div>
          
        </div>   
      </div>
      <hr className='flex hbg'></hr>
      <div className="lg:mt-2 mt-4 flex lg:flex items-center lg:items-center mr-4">
        <ul className="flex gap-4 flex-wrap">
          {filterCategories.flatMap(({ items }) =>
            items.map((item, index) => (
              <li 
                key={index} 
                className="hbg hover:text-white dcolor cursor-pointer rounded-sm p-2"
                onClick={() => onFilterChange(item)}
              >
                {item}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default JobListing;
