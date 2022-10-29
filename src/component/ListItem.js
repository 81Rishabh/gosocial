import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosPersonAdd } from "react-icons/io";
import { BiMessageSquareDots } from "react-icons/bi";
import { FaUserCheck, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { isFriend } from "../helpers/isFriend";
import { addUserAdFriend } from "../actions/friendship";
import Skeleton from "react-loading-skeleton";
import Avatar from "./Avatar";

function ListItem({ users, loading }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // handle add use as friend
  function AddFriend(e, listIdx, friendId) {
    const getIcon = document.getElementById(`message-icon-${listIdx}`);
    e.target.remove();
    getIcon.style.display = "block";

    // set ajax request
    addUserAdFriend(friendId, dispatch);
  }

  return (
    <ul>
      {loading ? (
        <li className="list-item">
          {
            <div className="left">
              <div>
                <Skeleton
                  width={30}
                  height={30}
                  circle={true}
                  count={7}
                  style={{ margin: ".5rem 0" }}
                />
              </div>
              <p style={{ marginLeft: "1rem" }}>
                <Skeleton
                  height={30}
                  count={7}
                  className="para-skeleton"
                  style={{ margin: ".5rem 0" , width : "300px" }}
                />
              </p>
            </div>
          }
        </li>
      ) : (
        users &&
        users.map((user, idx) => (
          <React.Fragment key={user._id}>
            {user._id !== auth.user._id && (
              <li className="list-item flex">
                <div className="left flex">
                  <Avatar
                    img_url={user.avatar}
                    size="30"
                    className="user-avatar"
                  />
                  <Link to={`user_profile/${user._id}`}>
                    <span className="user-name">{user.username}</span>
                  </Link>
                </div>
                <div className="right">
                  {isFriend(user.friends, auth.user._id) ? (
                    <BiMessageSquareDots className="message-icon icon" />
                  ) : (
                    <div
                      className="icons"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BiMessageSquareDots
                        className="icon"
                        id={`message-icon-${idx}`}
                        style={{ display: "none" }}
                      />

                      <span
                        className="add-friend"
                        onClick={(e) => AddFriend(e, idx, user._id)}
                      >Add friend</span>
                    </div>
                  )}
                </div>
              </li>
            )}
          </React.Fragment>
        ))
      )}
    </ul>
  );
}

export default ListItem;
