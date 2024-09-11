import React, { useEffect, useState } from 'react'
import {auth,provider} from './firebaseconfig';
import {signInWithPopup} from 'firebase/auth';
import Google from './components/google.png';

function loginwithgoogle() {
    const[value,setValue] = useState('')
    const handleclick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)

        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
  return (
    <div>
      <center>
        {value?  
        <div>
          <hr></hr>
          <h5>signup with google</h5>
          <button onClick={()=>auth.signOut()}>signOut</button>
          </div>:
          <img src={Google} onClick={handleclick}  style={{width:"250px",margin:"20px"}}/>

        
        }
        </center>
    </div>
  )
}

export default loginwithgoogle;
