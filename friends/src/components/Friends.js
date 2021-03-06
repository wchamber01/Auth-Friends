import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route } from "react-router-dom";
import AddFriend from "./AddFriend";

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate() {
    // this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res.data, "get response");
        this.setState({
          friends: res.data
        });
      });
  };

  render() {
    return (
      <div className="friendsCont">
        {this.state.friends.map(item => (
          <div className="friendsDiv" key={item.id}>
            <h2>{item.name} </h2>
            <h3>Age: {item.age}</h3>
            <h3>Email: {item.email}</h3>
          </div>
        ))}
        <AddFriend state={this.state} getData={this.getData} />
        {/* <Route path="/protected" render={props => <AddFriend {...props} />} /> */}
      </div>
    );
  }
}

export default Friends;
