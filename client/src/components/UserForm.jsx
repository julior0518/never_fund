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
    displayForm = <div className="displayForm"  ref={form} >
      <input placeholder="username" id="username" type="text" className="displayFormInput"></input>
      <input placeholder="password" id="password" type="text" className="displayFormInput"></input>
      <button onClick={login}>submit</button>
    </div>
  }
  function closePop (e){
    console.log(e.target)
    console.log(form.current)
    if(form.current !== e.target){
    props.setUserStatus({...props.userStatus , userForm:false})}
  }
  return (
    <div className="userForm"  onClick={closePop} >
    {displayForm}
    </div>
  );
}

export default UserForm