const initState = {
  projects: [
    {
      id: 1,
      title: "help me find peace",
      content: "there are lots of conttents",
    },
    {
      id: 2,
      title: "figth is not good",
      content: "there are lots of fights people are doing amontg themselve",
    },
    {
      id: 3,
      title: "come on dude",
      content: "Cool dude are doing bts",
    },
  ],
};

const ProjectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created project", action.project);
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("Create project error", action.err);
      return state;

    default:
      return state;
  }
};

export default ProjectReducer;
