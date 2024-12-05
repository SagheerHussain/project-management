import React from "react";
import ProjectClient from "./ProjectClient";

type PageProps = {
  params: {
    id: string; // Ensure the `id` matches the `[id]` folder's parameter
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = params; // Extract the dynamic route parameter `id`
  return {
    title: `Project - ${id}`, // Dynamic metadata title
    description: `Details for project ${id}`, // Dynamic metadata description
  };
}

// Server component
const Project = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <div>
      <ProjectClient id={id} />
    </div>
  );
};

export default Project;
