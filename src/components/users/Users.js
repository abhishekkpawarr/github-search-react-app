import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import githubContext from "../../context/github/githubContext";

const Users = () => {
  const gc = useContext(githubContext);

  const { loading, users } = gc;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
const userStyle = {
  display: "grid",
  gridAutoColumns: "auto",
  gridTemplateColumns: "auto auto auto auto",
  //gridTemplateColumns: "repeat(4,100px)"
  gridGap: "2rem",
};

export default Users;
