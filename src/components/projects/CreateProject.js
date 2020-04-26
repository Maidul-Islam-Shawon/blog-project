import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/ProjectAction";

const CreateProject = (props) => {
  // const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");

  const [project, setProject] = useState({
    title: "",
    content: "",
  });

  //console.log(props);
  const handleChange = (e) => {
    //    const updateLogin = { :  };
    // console.log(login);
    project[e.target.id] = e.target.value;
    setProject(project);
    //console.log(project);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.CreateProject(project);
    console.log(project);
    console.log(props.createProject(project));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>

        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            type="text"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-1">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
