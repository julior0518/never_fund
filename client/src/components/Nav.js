import LogInOut from './LogInOut';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="Nav">
      <p>Nav</p>
      <Link to="/" className="li">
        Home
      </Link>
      <Link to="/profile" className="li">
        Profile
      </Link>
      <Link to="/taco" className="li">
        Taco
      </Link>
      <LogInOut props={props} />
    </div>
  );
}

export default Nav;
