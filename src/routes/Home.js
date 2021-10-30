import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

const Home = ({ data, addData }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onBodyChange = (e) => {
    setBody(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addData({ title, body });
    setTitle("");
    setBody("");
  };
  return (
    <>
      <h2>Home</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={title} onChange={onTitleChange} />
        <input type="text" value={body} onChange={onBodyChange} />
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
