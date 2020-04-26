import React from "react";
import Notification from "./Notification";
import ProjectLists from "../projects/ProjectLists";
import { connect } from "react-redux";

function Dashboard(props) {
  //console.log(props.project);
  //const project = props;
  //console.log(project);
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectLists projects={props} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notification />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
