import {useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {login} from '../actions/auth';
import {useNavigate} from 'react-router-dom';

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  function handleSubmit(e) {
    e.preventDefault();
    const body = {email , password}
    login(body , dispatch , navigate);
    reset();
  }
 
  // reset input fields
  function reset() {
     setemail("");
     setpassword("");
  }
  
  return (
    <div className="container">
      <div className="form-control">
        <h3>Login</h3>
         <form  onSubmit={handleSubmit}>
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
     <button type="submit">
        {
          auth.isProgress ? 'signing in.....' : 'SIGN IN'
        }
     </button>
         </form> 
       </div> 
    </div> 
  )
}

export default SignIn;