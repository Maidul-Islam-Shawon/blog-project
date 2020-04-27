import React from "react";
import Notification from "./Notification";
import ProjectLists from "../projects/ProjectLists";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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
  console.log(state);
  return {
    projects: state.fireStore.ordered.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
