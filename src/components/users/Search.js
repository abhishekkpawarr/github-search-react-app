import React, { useState, useContext } from "react";
import githubContext from "../../context/github/githubContext";
import alertContext from "../../context/alert/alertContext";
// eslint-disable-next-line no-unused-vars
import axios from "axios";

const Search = () => {
  const [text, setText] = useState("");

  const gc = useContext(githubContext);
  const ac = useContext(alertContext);

  let timeoutId = 0;

  const onChange = (e) => {
    setText(e.target.value);
    if (e.target.value === "") {
      ac.setAlert("Please Enter Something", "info");
      return;
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const query = e.target.value;
      //if (query === "") {
      //  ac.setAlert("Please Enter Something", "info");
      //  return;
      //}
      gc.searchUsers(query);
    }, 1500);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      ac.setAlert("Please Enter Something", "info");
      return;
    }
    gc.searchUsers(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} onChange={onChange} s>
        <div className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={text}
            onKeyUp={onChange}
          />
        </div>
      </form>
      {gc.users.length > 0 && (
        <button
          type="button"
          className="btn btn-warning btn-block"
          onClick={gc.userClear}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
