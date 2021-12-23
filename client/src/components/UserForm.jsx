import { useRef, useState } from "react";
import LogInOut from "./LogInOut";

function UserForm(props) {
  const form = useRef()
  const [formType, setFormType] = useState({
    type: "login"
  })

  function login(){}
  function signup(){}
  let displayForm
  if (formType.type === "login"){
    displayForm = <div className="displayForm">
      <h2>Log In</h2>
      <input placeholder="username" id="username" type="text" className="displayFormInput"></input>
      <input placeholder="password" id="password" type="text" className="displayFormInput"></input>
      <button onClick={login}>submit</button>
      <p className="toSignUp" onClick={()=>{setFormType({...formType, type:"signup"})}}>Don't have an account? Sign up</p>
    </div>
  } else if (formType.type === "signup"){
    displayForm = <div className="displayForm">
    <h2>Create an account</h2>
    <input placeholder="username" id="username" type="text" className="displayFormInput"></input>
    <input placeholder="password" id="password" type="text" className="displayFormInput"></input>
    <input placeholder="passwordConfirm" id="passwordConfirm" type="text" className="displayFormInput"></input>
    <button onClick={login}>submit</button>
    <p className="toSignUp" onClick={()=>{setFormType({...formType, type:"login"})}}>Already have an account? Log in</p>
  </div>
  }
 

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