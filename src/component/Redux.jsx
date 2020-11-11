import React from "react";
import { connect } from "react-redux";
import { setName } from "../storage/action/actions";

const styleObj = {
  name: { textAlign: "center", fontSize: "30px" },
  input: { height: "25px", width: "250px", fontSize: "20px", padding: "5px" },
};

const Redux = (props) => {
  console.log("=>>>", props);
  return (
    <div style={styleObj.name}>
      <h1>{props.name}</h1>
      <div>
        <input defaultValue={props.name} onChange={(e) => props.setName(e.target.value)} style={styleObj.input} type="text" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.subReducer.name,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (value) => dispatch(setName(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
