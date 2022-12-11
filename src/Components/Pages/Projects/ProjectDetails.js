import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
  const project = useLoaderData();
  console.log(project);
  return (
    <div>

    </div>
  );
};

export default ProjectDetails;