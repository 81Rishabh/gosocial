import React ,{ useEffect, useState } from "react";

import { ApiUrl } from "../helpers/urls";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import ListItem from "./ListItem";
import "../styles/friends.css";

function AddFriends() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);



  //   fetch all the users
  useEffect(() => {
    let url = ApiUrl.getUsers();
    axios
      .get(url)
      .then((res) => {
        setUsers(res.data.data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="left-container">
      <div className="friends-list card">
        <div className="card-header">
          <h4>Add Friends</h4>
        </div>
        <div className="card-body">
          <ListItem 
            users={users}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default AddFriends;
