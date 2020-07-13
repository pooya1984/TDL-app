import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/todoList";
import { logout } from "../../actions/auth";

const Navbar = ({ getPosts, auth, logout }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      <div className="d-flex navbar">
        <p className="text-light h1 P-3 ">
          hello {auth.user && auth.user.name}{" "}
        </p>
        <a onClick={logout} href="/">
          <i className="fas fa-power-off text-danger P-4 m-5"></i>
          <span className="hide-sm"></span>
        </a>
      </div>
    </Fragment>
  );
};
Navbar.propTypes = {
  getPosts: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  todoList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  todoList: state.todoList,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts, logout })(Navbar);
