import React from "react";
import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
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
        {this.state.friends.map((item, id) => (
          <div key={item.id}>
            <h2>Name: {item.name}</h2>
            <h3>Age: {item.age}</h3>
            <h3>Email: {item.email}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Friends;
