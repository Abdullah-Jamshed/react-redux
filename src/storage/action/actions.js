const setName = (name) => {
  return (dispatch) => {
    dispatch({ type: "UPDATENAME", payload: { name } });
  };
};

export { setName };
