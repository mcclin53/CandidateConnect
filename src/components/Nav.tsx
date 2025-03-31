import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
    <div>Nav</div>
    <ul id='card2'>
            <li>
                <Link 
                to="/CandidateSearch"
                className={currentPage === '/CandidateSearch' ? 'nav-link active' : 'nav-link'}>
                Candidate Search
                </Link>
            </li>
            <li>
                <Link 
                to="/SavedCandidates"
                className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}>
                Saved Candidates
                </Link>
            </li>
            </ul>
            </div>
  
  )
};

export default Nav;
