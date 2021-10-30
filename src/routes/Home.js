import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

const Home = ({ data, addData }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addData(text);
    setText("");
  };
  return (
    <>
      <h2>Home</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul>
        {data.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { data: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //text를 prop으로 가지는 fucntion , 실행시 dispatch (actionCreators.createData)  호출
    addData: (text) => dispatch(actionCreators.createData(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
