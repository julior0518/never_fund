import axios from "axios";
import { useRef, useState } from "react";
import { BASE_URL } from "../Globals";

function UserForm(props) {
  const form = useRef()
  const [formType, setFormType] = useState({
    type: "login"
  })
  const [user, setUser] = useState ({
    nameUser: "",
    password: "",
    passwordConfirm: ""
  })
  function handleChange (e){
    console.log(user)
    e.preventDefault();
    setUser({...user, [e.target.id]: e.target.value})
  }

  function login(){}
  function signup(){
    axios.post(`${BASE_URL}/users`, user)
    console.log(`created`)
  }

  let displayForm
  if (formType.type === "login"){
    displayForm = 
    <div className="displayForm">
      <h2>Log In</h2>
      <input onChange={handleChange}  placeholder="username" id="nameUser" type="text" className="displayFormInput"></input>
      <input onChange={handleChange} placeholder="password" id="password" type="text" className="displayFormInput"></input>
      <button onClick={login}>submit</button>
      <p className="toSignUp" onClick={()=>{setFormType({...formType, type:"signup"})}}>Don't have an account? Sign up</p>
    </div>
  } else if (formType.type === "signup"){
    displayForm = 
    <div className="displayForm">
      <h2>Create an account</h2>
      <input onChange={handleChange} placeholder="username" id="nameUser" type="text" className="displayFormInput"></input>
      <input onChange={handleChange} placeholder="password" id="password" type="text" className="displayFormInput"></input>
      <input onChange={handleChange} placeholder="passwordConfirm" id="passwordConfirm" type="text" className="displayFormInput"></input>
      <button onClick={signup}>submit</button>
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