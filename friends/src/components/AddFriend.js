import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { render } from "@testing-library/react";
import Friends from "./Friends";
// import { createBrowserHistory } from "history";

// class AddFriend extends React.Component {
const AddFriend = props => {
  console.log(props, "props");
  // const history = createBrowserHistory();
  // console.log(history, "history");
  // state = {
  //   name: "",
  //   age: "",
  //   email: ""
  // };
  const [friend, setFriend] = useState({});
  const [friends, setFriends] = useState([]);

  const handleChanges = e => {
    // console.log(friend, "handleChanges");
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/friends")
  //     .then(res => {
  //       console.log(res.data, "get response");
  //       setFriends(res.data);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friend)
      .then(res => {
        console.log(res.data, "post response");
        props.getData();
        setFriend({ name: "", age: "", email: "" });
        // setFriend(res.data);
        // props.history.push("/protected");
      })
      .catch(err => console.log(err));
    // setName("");
    // setAge("");
    // setEmail("");
  };

  // render() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="newFriendDiv">
        <h3>Add New Friend</h3>
        <label id="name">Name:</label>
        <input
          name="name"
          value={friend.name}
          label="name"
          id="name"
          type="text"
          placeholder="name"
          onChange={handleChanges}
        />
        <label id="age">Age: </label>
        <input
          name="age"
          value={friend.age}
          label="age"
          id="age"
          type="text"
          placeholder="age"
          onChange={handleChanges}
        />
        <label id="email">Email: </label>
        <input
          name="email"
          value={friend.email}
          label="email"
          id="email"
          type="email"
          placeholder="email"
          onChange={handleChanges}
        />
        <button type="submit">Add Friend</button>
      </div>
    </form>
  );
  // }
};

export default AddFriend;
