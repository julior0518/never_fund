function LogInOut(props) {
  const logIn = () => {
    props.props.setUserStatus({
      ...props.props.userStatus,
      userForm: true
    });
  };
  const logOut = () => {
    props.props.setUserStatus({
      ...props.props.userStatus,
      loginStatus: false,
      userForm: false
    });
  };

  return (
    <div className="LogInOut">
      {props.props.userStatus.loginStatus ? (
        <button onClick={logOut}>logOut</button>
      ) : (
        <button onClick={logIn}>logIn</button>
      )}
    </div>
  );
}

export default LogInOut;
