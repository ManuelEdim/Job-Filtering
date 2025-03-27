import React from 'react';
import JobList from './JobList';

const MainBody = ({ filteredJobs, onFilterChange }) => {
  return (
    <main className="lg:flex flex-col text-center w-fit h-fit pt-6 pb-3">
      <div className="flex justify-evenly w-full place-items-center p-3">
        <JobList filteredJobs={filteredJobs} onFilterChange={onFilterChange} />
      </div>
    </main>
  );
};

export default MainBody;
