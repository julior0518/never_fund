function LogInOut(props) {
  const set = () => {
    props.props.setUserStatus({ ...props.props.userStatus, loginStatus: true });
  };

  console.log(props.props.userStatus);

  return (
    <div className="LogInOut">
      {props.props.userStatus.loginStatus ? (
        <button>logOut</button>
      ) : (
        <button onClick={set}>logIn</button>
      )}
    </div>
  );
}

export default LogInOut;
