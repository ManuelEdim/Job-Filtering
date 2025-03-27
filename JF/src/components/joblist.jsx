import React from 'react';
import JobListing from './JobListing';

const JobList = ({ filteredJobs, onFilterChange }) => {
  return (
    <section className="flex flex-col items-center">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobListing key={job.id} job={job} onFilterChange={onFilterChange} />
        ))
      ) : (
        <p className="text-gray-500 mt-4">No jobs match the selected filters.</p>
      )}
    </section>
  );
};

export default JobList;
