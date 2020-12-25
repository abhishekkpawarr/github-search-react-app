import React, { useState, useContext } from "react";
import githubContext from "../../context/github/githubContext";
import alertContext from "../../context/alert/alertContext";
import axios from "axios";

const Search = () => {
  const [text, setText] = useState("");

  const gc = useContext(githubContext);
  const ac = useContext(alertContext);

  const onChange = (e) => {
    const query = e.target.value;
    setText(e.target.value);
    //if (query === "") {
    //  ac.setAlert("Please Enter Something", "info");
    //  return;
    //}
    gc.searchUsers(query);
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
            onChange={onChange}
          />
        </div>
      </form>
      {gc.users.length > 0 && (
        <button className="btn btn-warnning btn-block" onClick={gc.userClear}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
