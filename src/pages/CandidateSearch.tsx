import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

const [candidate, setCandidate] = useState<Candidate | null>(null);

  const handleSearch = async () => {
  const candidates = await searchGithub();
    console.log('candidates', candidates);

    if (!candidates || candidates.length === 0) {
      console.error('No candidates returned from searchGithub');
      return;
    }
for (let i = 0; i < candidates.length; i++) {
  const login = candidates[i].login;
  const candidateData = await searchGithubUser(login);
  if (
    candidateData.location &&
    candidateData.email &&
    candidateData.bio &&
    candidateData.name &&
    candidateData.company
  ) {
  setCandidate(candidateData);
  break;
    }
  }
};

  const saveCandidate = () => {
    if (!candidate) return;

    const savedCandidates: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    handleSearch();
  };

  useEffect(() => {
    handleSearch();
  }, []);
  

  return (
    <div>
      <h1 style={{justifyContent: 'center'}}>Candidate Search</h1>
      {candidate && (
        <div>
        <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`}/>
      <div>
        <h4>{candidate.name}({candidate.login})</h4>
        <p>Location: {candidate.location}</p>
        <p>Email:
          <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
        </p>
        <p>Company: {candidate.company}</p>
        <p>Bio: {candidate.bio}</p>
      </div>
    </div>
  )
}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '100px' }}>
      <button type="button" onClick={handleSearch}>Next -</button>
      <button type="button" onClick={saveCandidate}>Save +</button>
    </div>
    </div>
    );
  };
export default CandidateSearch;
