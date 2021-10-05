import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_posts } from "../actions";
import { ListGroup } from "react-bootstrap";

const Posts = () => {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state);
  const state = postsData.postReducers;
  useEffect(() => {
    dispatch(fetch_posts());
    document.title = "React redux app middleware with thunk";
  }, [dispatch]);

  console.log(state);
  const renderPost = () => {
    if (state.loading) {
      return <h1>Loading..</h1>;
    }
    if (state.error != null) {
      return <h1>{state.error.message}</h1>;
    }
    return state.items.map((el) => {
      return (
        <ListGroup.Item key={el.id}>
          {el.id}. {el.title}
        </ListGroup.Item>
      );
    });
  };

  return (
    <div>
      <h2>Posts List</h2>
      <ListGroup>
        {renderPost()}
        {/*  {postsData.postReducers.map((el) => {
          return <ListGroup.Item key={el.id}>{el.id}. {el.title}</ListGroup.Item>;
        })} */}
      </ListGroup>
    </div>
  );
};

export default Posts;
