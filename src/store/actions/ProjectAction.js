export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //console.log(...project);
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "mike",
        authoreLastName: "Hussy",
        authoreId: 112233,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
