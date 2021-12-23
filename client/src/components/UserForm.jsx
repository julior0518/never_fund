import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../Globals";

function UserForm(props) {
  const form = useRef()
  const [formType, setFormType] = useState({
    type: "login",
    userCheck: ""
  })
  const [user, setUser] = useState ({
    nameUser: "",
    password: "",
    passwordConfirm: ""
  })
  useEffect(()=>{async function userCheck () {
    const res = await axios.get(`${BASE_URL}/user/${user.nameUser}`)
    setFormType({...formType, userCheck:res.data.esteUsername[0].nameUser})
  }
  userCheck()
},[user])

  function handleChange (e){
    setUser({...user, [e.target.id]: e.target.value})
  }


  function login(){}



  async function signup(){
    if (formType.userCheck === user.nameUser){
      console.log(`this user exists`)
      alert("This usernam is taken, please choose a new username")
    } else if ((user.password !== "") && (user.password === user.passwordConfirm)){
    const res = await axios.post(`${BASE_URL}/users`, user)
    props.setUserStatus({...props.userStatus , userForm:false, loginStatus:true, userID:res.data.esteUser._id})
  } else {
    alert("Please check the passwords")
  }
  }

  let displayForm
  if (formType.type === "login"){
    displayForm = 
    <div className="displayForm">
      <h2>Log In</h2>
      <input onChange={handleChange}  placeholder="username" id="nameUser" type="text" className="displayFormInput"></input>
      <input onChange={handleChange} placeholder="password" id="password" type="password" className="displayFormInput"></input>
      <button onClick={login}>submit</button>
      <p className="toSignUp" onClick={()=>{setFormType({...formType, type:"signup"})}}>Don't have an account? Sign up</p>
    </div>
  } else if (formType.type === "signup"){
    displayForm = 
    <div className="displayForm">
      <h2>Create an account</h2>
      <input onChange={handleChange} placeholder="username" id="nameUser" type="text" className="displayFormInput"></input>
      <input onChange={handleChange} placeholder="password" id="password" type="password" className="displayFormInput"></input>
      <input onChange={handleChange} placeholder="passwordConfirm" id="passwordConfirm" type="password" className="displayFormInput"></input>
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