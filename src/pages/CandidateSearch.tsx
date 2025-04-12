import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

const [candidate, setCandidate] = useState<Candidate | null>(null);

const handleSearch = async () => {
  const candidates = await searchGithub();
  console.log('candidates', candidates);
  return;
}

 Candidate: ''
});
  return <h1>CandidateSearch</h1>;
    <p>Candidate</p>
};

export default CandidateSearch;
