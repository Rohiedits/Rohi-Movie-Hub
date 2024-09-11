import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Hero from './Hero';
import Loginwithgoogle from '../loginwithgoogle';
import "../../src/login.css";

function Signup() {
  const [data,setData] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  }

  )
  const {username,email,password,confirmPassword} = data
  const changeHandler =e=> {
    setData ({...data,[e.target.name]:e.target.value})
  }
  const submitHandler =e=>{
    e.preventDefault();
    if (username.length <= 5){
      alert("user name must contains atleast 5 characters");
    }
    else if(password !== confirmPassword){
      alert("password are not match");
      
    }
    else {
      axios.post('https://rohisignin-firebase-default-rtdb.firebaseio.com/register.json',data).then(()=>alert("submitted successfullyy"))
    }
  }
  return (
 <div>
     <Hero text = " 👤Sign in page"/>
    <div style={{margin:"10px"}}>
      <center>
       <div style={{margin:"2px solid black", width:"200px",height:"500px"}}>
      <form onSubmit={submitHandler}>
        {/* <label>UserName:</label> */}
        <input  type="text" name="username" placeholder='username' value={username} onChange={changeHandler}/> <br/> 
        <input type="email" name="email" placeholder='email' value={email} onChange={changeHandler}/><br/>
        <input type="password" name="password" placeholder='password' value={password} onChange={changeHandler}/><br/>
        <input type="password" name="confirmPassword" placeholder='conform password' value={confirmPassword} onChange={changeHandler}/><br/> <br/>
        <input type="submit" name="submit"/>
      </form>
      </div>
      {/* <Loginwithgoogle/> */}
      </center>
    </div>
   </div> 
  )
}

export default Signup