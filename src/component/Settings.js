import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { _updateProfile } from "../actions/auth";
import { BiArrowBack } from "react-icons/bi";
import Avatar from "../component/Avatar";
import toast from "react-hot-toast";

function Settings() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [file, setfile] = useState("");
  const [currentEmail, setcurrentEmail] = useState("");
  const [editMode, seteditMode] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  load current authenticated email into edit inptu field
  useEffect(() => setcurrentEmail(auth.user.email), [auth]);

  // handle Submit form
  function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", file);

    // dispatch an update profile action
    _updateProfile(auth.user._id, formData, dispatch, navigate);
    seteditMode(false);
  }

  // hanlde Enable mode
  function handleEnableMode() {
    seteditMode(true);
    setcurrentEmail("");
    toast.success("Edit Mode Enabled", {
      duration: 3000,
      position: "top-center",
    });
  }

  // handle cancle
  function handleCancel() {
    seteditMode(false);
    setcurrentEmail(auth.user.email);
  }

  // click to get back to previous page
  function goBack() {
    navigate(-1);
  }

  return (
    <div className="container">
    <div className="form-control">
        <p style={{marginRight : '10px' , cursor : 'pointer'}} onClick={goBack}>
         <span>
           <BiArrowBack /> 
         </span> 
        <span> back</span>
        </p>
        <h3>
           Profile
        </h3>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="profile-image" style={{ position: "relative" }}>
            <Avatar img_url={auth.user.avatar} size="100" />
            <input
              type="file"
              name="avatar"
              onChange={(e) => setfile(e.target.files[0])}
            />
          </div>
          <label>Click to update profile</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={editMode ? email : currentEmail}
            onChange={(e) => setemail(e.target.value)}
            disabled={!editMode ? true : false}
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            disabled={!editMode ? true : false}
          />{" "}
          {editMode ? (
            <button
              type="button"
              style={{
                background: "transparent",
                color: "#000",
                border: "1px solid darkblue",
              }}
              onClick={handleCancel}
            >
              cancel
            </button>
          ) : (
            <button type="button" onClick={handleEnableMode}>
              Edit Profile
            </button>
          )}
          <button type="submit" style={{ marginLeft: "10px" }}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
