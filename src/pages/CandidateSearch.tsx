import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../Candidate.interface';



const CandidateSearch = () => {

const [candidates, setCandidates] = useState<Candidate[]>([]);
const [searchTerm, setSearchTerm] = useState('');

const handleSearch = async () => {
  const results = await searchGithub(setSearchTerm);
  setCandidates(results);
};
 Candidate: ''
});
  return <h1>CandidateSearch</h1>;
    <p>Candidate</p>
};

export default CandidateSearch;
