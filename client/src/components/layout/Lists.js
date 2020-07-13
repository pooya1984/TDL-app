import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/todoList";
import ListItem from "./ListItem";
import DoneList from "./DoneList";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import AddTask from "./AddTask";
import { logout } from "../../actions/auth";

const Lists = ({ getPosts, todoList: { posts, loading }, auth, logout }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Navbar />
          <AddTask />

          <div
            style={{
              width: "80%",
              alignItems: "center",
              left: "5%",
              position: "absolute",
            }}
          >
            <div className="d-flex">
              <div className="d-column col">
                <p className="text-dark h1">TODO List</p>
                <div className="border border-secondary"></div>
                <div className="posts">
                  {posts.map((list) => (
                    <ListItem key={list._id} list={list} />
                  ))}
                </div>
              </div>
              <div className="d-column col">
                <p className="text-dark h1">Done List</p>
                <div className="border border-secondary"></div>
                <div className="posts">
                  <DoneList />
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      ;
    </Fragment>
  );
};

Lists.propTypes = {
  getPosts: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  todoList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  todoList: state.todoList,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts, logout })(Lists);
