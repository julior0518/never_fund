import LogInOut from './LogInOut';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <p>Nav</p>
      <Link to="/" className="li">
        Landing
      </Link>
      <Link to="/profile" className="li">
        Profile
      </Link>
      <Link to="/taco" className="li">
        Taco
      </Link>
      <LogInOut />
    </div>
  );
}

export default Nav;
