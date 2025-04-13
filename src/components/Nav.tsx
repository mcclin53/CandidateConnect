import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <header>
      <nav className="nav text-left fixed-top" style={{justifyContent: 'center'}}>
        <Link 
          className="nav-link nav-item" to="/">
          Candidate Search
        </Link>
        <Link 
          className="nav-link nav-item" to="/SavedCandidates">
          Saved Candidates
        </Link>
      </nav>
    </header>
  )
};

export default Nav;
