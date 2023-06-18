import './SignUp.css';
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const navigate = useNavigate();
  const HandleSubmit=(e)=>
  {
    navigate('/home')
  }
  return (
  <div className='body'>
    <div className="header"><h1 className="names">MITS CAREER CONNECTOR</h1>
    <h2>CREATE ACCOUNT</h2>
    </div>
    <form className="form1">

      
     
      <label >Name</label>
      <br/>
      <input type="text" placeholder='Enter your name'>
      </input>
      <br/>
      <div >
      <label>Email</label>
      <br/>

      <input type="email" placeholder='Enter your email'>
      </input>
      <br/>
   
      </div>
 
      <div >
      <label>Password</label>
      <br/>
      <input type="password" placeholder='Enter your password'>
      </input>
      <br/>
      </div>
     
     
     
      

      <div>
      <label className='sem'>Sem</label>
      <br/>
      <select>
        <option>S1</option>
        <option>S2</option>
        <option>S3</option>
        <option>S4</option>
        <option>S5</option>
        <option>S6</option>
        <option>S7</option>
        <option>S8</option>
      </select>
      <br/>
      
      <label className='branch'>Branch</label>
      <br/>
      <select>
        <option>CSE</option>
        <option>EC</option>
        <option>EEE</option>
        <option>MECH</option>
        <option>CE</option>
      </select>
      <br/><br/>
      </div>
      
    
      <button className='S' onClick={HandleSubmit}>Sign-Up</button>

    </form>
  </div>
  );
}

export default SignUp;