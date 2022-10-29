import { useState } from "react";
import {register} from '../actions/auth';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';


function SignUp() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conform_password, setconform_password] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const auth = useSelector((state) => state.auth);
  
  function handleSubmit(e) {
    e.preventDefault();
    const body = {
      username, email , password , conform_password
    }
    register(body , dispatch , navigate);
    reset();
  }

  function reset() {
     setusername("");
     setemail("");
     setpassword("");
     setconform_password("");
  }
  

  
  return (
    <div className="container">
      <div className="form-control">
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />{" "}
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            name="conformPassword"
            placeholder="Re-Enter password"
            value={conform_password}
            onChange={(e) => setconform_password(e.target.value)}
          />{" "}
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
