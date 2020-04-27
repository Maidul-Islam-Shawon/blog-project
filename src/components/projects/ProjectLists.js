import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

function ProjectLists({ projects }) {
  console.log(projects);
  return (
    <div className="project-list section">
      {projects.projects &&
        projects.projects.map((project) => {
          return (
            <Link to={"/project/" + project.id}>
              <ProjectSummary project={project} key={project.id} />
            </Link>
          );
        })}
    </div>
  );
}
export default ProjectLists;
