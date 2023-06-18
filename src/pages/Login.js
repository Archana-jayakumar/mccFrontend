import { useState, useEffect } from "react";
import "./login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  
  const HandleSubmit=(e)=>
  {
    
  }
  
  return (
    <>
      <body className="Body"> 
        <div className="helo">
          <h4 class="h">MITS CAREER CONNECTOR</h4>
        </div>
        <div className="container">
          <h2>User Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="ui divider"></div>
            <div classNamw="ui from">
              <div className="field">
                <label className="lab">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="field">
                <label className="lab">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>
              <Link to='/home'>
                <button onClick={HandleSubmit} className="fluid ui button blue">Submit</button>
              </Link>
              <p>Don't have an account? <Link className='Header_Link' to="/SignUp">SignUp</Link></p>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default Login;
