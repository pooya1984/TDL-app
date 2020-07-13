import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_DONELISTS,
  DONElIST_ERROR,
  DELETE_DONELIST,
  ADD_DONELIST,
} from "./types";

// Get posts
export const getDoneLists = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/doneList");

    dispatch({
      type: GET_DONELISTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DONElIST_ERROR,
      payload: { msg: err, status: err },
    });
  }
};

// Delete post
export const deleteDoneList = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/doneList/${id}`);

    dispatch({
      type: DELETE_DONELIST,
      payload: id,
    });

    dispatch(setAlert("doneList Removed", "success"));
  } catch (err) {
    dispatch({
      type: DONElIST_ERROR,
      payload: { msg: err, status: err },
    });
  }
};

// Add post
export const addDoneList = (formData, audio) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/doneList", formData, audio, config);

    dispatch({
      type: ADD_DONELIST,
      payload: res.data,
    });

    dispatch(setAlert("DoneList Created", "success"));
  } catch (err) {
    dispatch({
      type: DONElIST_ERROR,
      payload: { msg: err, status: err },
    });
  }
};
