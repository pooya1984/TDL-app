import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteDoneList } from "../../actions/doneList";
import { addDoneList } from "../../actions/doneList";

const DoneItem = ({
  deleteDoneList,
  auth,
  list: { _id, doneTxt, user, date },
  showActions,
}) => {
  return (
    <Fragment>
      {user === auth.user._id ? (
        <div className="post">
          <div className="wrapper">
            <p className=" h3">{doneTxt}</p>
            <p className="text-secondary h6">
              Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
            </p>

            {showActions && (
              <Fragment>
                {!auth.loading && user === auth.user._id && (
                  <button
                    onClick={() => deleteDoneList(_id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    <i className="fas fa-times" />
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

DoneItem.defaultProps = {
  showActions: true,
};

DoneItem.propTypes = {
  list: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteDoneList: PropTypes.func.isRequired,
  addDoneList: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteDoneList, addDoneList })(
  DoneItem
);
