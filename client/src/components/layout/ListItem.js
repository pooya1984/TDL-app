import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deletePost } from "../../actions/todoList";
import { addDoneList } from "../../actions/doneList";

const ListItem = ({
  deletePost,
  addDoneList,
  auth,
  list: { _id, text, user, date },
  showActions,
}) => {
  const [formData, setFormData] = useState({ doneTxt: "" });

  useEffect(() => {
    addDoneList();

    setFormData({
      doneTxt: text,
    });
  }, [addDoneList]);

  const doneBtn = (_id) => {
    addDoneList(formData);
    deletePost(_id);
  };

  console.log(formData);
  return (
    <Fragment>
      {user === auth.user._id ? (
        <div className="post">
          <div className="wrapper">
            <p className=" h3">{text}</p>
            <p className="text-secondary h6">
              Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
            </p>

            {showActions && (
              <Fragment>
                {!auth.loading && user === auth.user._id && (
                  <button
                    onClick={() => deletePost(_id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    <i className="fas fa-times" />
                  </button>
                )}
                {!auth.loading && user === auth.user._id && (
                  <button
                    onClick={() => doneBtn(_id)}
                    type="button"
                    className="btn btn-success"
                  >
                    <i class="fas fa-check"></i>{" "}
                  </button>
                )}
              </Fragment>
            )}
          </div>
        </div>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

ListItem.defaultProps = {
  showActions: true,
};

ListItem.propTypes = {
  list: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addDoneList: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePost, addDoneList })(ListItem);
