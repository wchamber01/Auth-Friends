import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

// class AddFriend extends React.Component {
const AddFriend = props => {
  // state = {
  //   name: "",
  //   age: "",
  //   email: ""
  // };
  const [friends, setFriends] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const nameChange = event => {
    setName(event.target.value);
  };
  const ageChange = event => {
    setAge(event.target.value);
  };
  const heightChange = event => {
    setEmail(event.target.value);
  };
  handleChanges = e => {
    this.setName({ [e.target.name]: e.target.value });
    this.setAge({ [e.target.age]: e.target.value });
    this.setEmail({ [e.target.email]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", { name: name, age: age, email: email })
      .then(res =>
        // console.log(res.data, "post response");
        setFriends(res.data)
      );
    // .catch(err => console.log(err));
    setName("");
    setAge("");
    setEmail("");
  };

  // render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <div className="newFriendDiv">
        <h3>Add New Friend</h3>
        <label id="name">Name:</label>
        <input
          label="name"
          id="name"
          type="text"
          placeholder="name"
          onChange={this.handleChanges}
        />
        <label id="age">Age: </label>
        <input
          label="age"
          id="age"
          type="text"
          placeholder="age"
          onChange={this.handleChanges}
        />
        <label id="email">Email: </label>
        <input
          label="email"
          id="email"
          type="email"
          placeholder="email"
          onChange={this.handleChanges}
        />
        <button type="submit">Add Friend</button>
      </div>
    </form>
  );
  // }
};

export default AddFriend;
