import { useRef, useState } from "react";
import LogInOut from "./LogInOut";

function UserForm(props) {
  const form = useRef()
  const [formType, setFormType] = useState({
    type: "login"
  })

  function login(){}
  let displayForm
  if (formType.type === "login"){
    displayForm = <div className="displayForm"   >
      <input b placeholder="username" id="username" type="text" className="displayFormInput"></input>
      <input placeholder="password" id="password" type="text" className="displayFormInput"></input>
      <button onClick={login}>submit</button>
      <p className="toSignUp" onClick={()=>{}}>Don't have an account? Sign up</p>
    </div>
  } else if (formType.type === "signup"){}

  function closePop (e){
    
    if(form.current === e.target){
    props.setUserStatus({...props.userStatus , userForm:false})}
  }

  return (
    <div className="userForm" ref={form} onClick={closePop} >
    {displayForm}
    </div>
  );
}

export default UserForm