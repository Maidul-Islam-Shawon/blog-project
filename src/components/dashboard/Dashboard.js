import React from "react";
import Notification from "./Notification";
import ProjectLists from "../projects/ProjectLists";

export default function Dashboard() {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectLists />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notification />
        </div>
      </div>
    </div>
  );
}
