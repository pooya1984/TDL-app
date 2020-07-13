import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDoneLists } from "../../actions/doneList";
import DoneItem from "./DoneItem";

const DoneList = ({ getDoneLists, doneList: { doneLists, loading } }) => {
  useEffect(() => {
    getDoneLists();
  }, [getDoneLists]);

  return (
    <Fragment>
      {doneLists.map((list) => (
        <DoneItem key={list._id} list={list} />
      ))}
    </Fragment>
  );
};
DoneList.propTypes = {
  getDoneLists: PropTypes.func.isRequired,
  doneList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  doneList: state.doneList,
  auth: state.auth,
});

export default connect(mapStateToProps, { getDoneLists })(DoneList);
