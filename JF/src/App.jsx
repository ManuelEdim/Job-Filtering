import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import MainBody from './components/MainBody';
import jobData from './components/jobData.json';

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState([]); 
  const jobs = useMemo(() => jobData, []); 

  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      }
      return [...prevFilters, filter];
    });
  };

  const handleClearFilters = () => setSelectedFilters([]);

  const filteredJobs = useMemo(() => {
    if (selectedFilters.length === 0) return jobs;
    return jobs.filter((job) =>
      selectedFilters.some((filter) =>
        [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
      )
    );
  }, [selectedFilters, jobs]);

  return (
    <div className="flex flex-col items-center lg:w-full w-full min-h-screen bg-gray-100">
      <Header selectedFilters={selectedFilters} onClear={handleClearFilters} onFilterChange={handleFilterChange} />
      <MainBody filteredJobs={filteredJobs} onFilterChange={handleFilterChange} />
    </div>
  );
};

export default App;
