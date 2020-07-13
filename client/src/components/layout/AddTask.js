import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/todoList";

const PostForm = ({ addPost, match }) => {
  const [formData, setFormData] = useState({
    text: "",
  });

  const { text } = formData;

  useEffect(() => {
    addPost();

    setFormData({
      text: "",
    });
  }, [addPost]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData({
      text: "",
    });
  };

  return (
    <Fragment>
      <div className="post-form">
        <form className="form my-1" onSubmit={(e) => onSubmit(e)}>
          <input
            className="todoInput"
            type="text"
            name="text"
            placeholder="new task"
            value={text}
            onChange={(e) => onChange(e)}
          />
          <input className="todoSubmit" type="submit" value="ok" />
        </form>
      </div>
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { addPost })(PostForm);
