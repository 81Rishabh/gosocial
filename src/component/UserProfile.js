import React, { useEffect , useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getProfile } from "../actions/profile";
import { goBack } from "../helpers/navigate";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { isFriend } from "../helpers/isFriend";
import Avatar from "./Avatar";
import "../styles/profile.css";
import { remove_friendship } from "../actions/friendship";

function UserProfile() {
  const [isRemoved, setisRemoved] = useState(false);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //  load user profile
  useEffect(() => {
    getProfile(userId, dispatch);
  }, [userId, dispatch]);


  // remove friend handling function
  function removeFriendship(friend_id) {
    remove_friendship(friend_id , dispatch);
    setisRemoved(true);
  }

  return (
    <div className="container">
      <div className="profile">
        <p
          style={{ marginRight: "10px", cursor: "pointer", float: "left" }}
          onClick={() => goBack(navigate)}
        >
          <span>
            <BiArrowBack />
          </span>
          <span> back</span>
        </p>
        <div className="profile-container">
          <h3>Profile</h3>

          <div className="profile-body">
            {isLoading ? (
              <div>
                <Skeleton width={200} height={200} circle={true} />
              </div>
            ) : (
              user && <Avatar img_url={user.avatar} size="200" />
            )}
            {isLoading ? (
              <p>
                <Skeleton width={200} height={10} count={2} duration="1" />
              </p>
            ) : (
              <React.Fragment>
                {user && <p className="profile-username">{user.username}</p>}
                {user && <p className="profile-email">{user.email}</p>}
              </React.Fragment>
            )}
          </div>

          {isLoading ? (
            <p>
              <Skeleton width={200} height={20} duration="1" />
            </p>
          ) : (
            <div className="profile-buttons">
              {
                
                 user && isFriend(user.friends, auth.user._id) ? (
                   <React.Fragment>
                     {
                       isRemoved ? (
                        <button type="button" className="btn-outline" >
                         Add Friend
                       </button>
                       ) : (
                        <button type="button" className="btn-outline" onClick={() => removeFriendship(user._id)}>
                         Remove
                        </button>
                       )
                     }
                   </React.Fragment>
                ) : (
                  <button type="button" className="btn-outline">
                    Add Friend
                  </button>
                )  
              }
              <button type="button" className="btn-dark">
                Message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
