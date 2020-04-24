import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  console.log(props);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            repellat earum? Cupiditate modi eius quae necessitatibus officiis at
            aperiam adipisci vel voluptate atque numquam assumenda itaque quod
            inventore, laudantium deserunt?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo, repellat earum? Cupiditate modi
            eius quae necessitatibus officiis at aperiam adipisci vel voluptate
            atque numquam assumenda itaque quod inventore, laudantium deserunt?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the MI</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
