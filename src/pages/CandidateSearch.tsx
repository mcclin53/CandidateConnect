import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../Candidate.interface';



const CandidateSearch = () => {

const [searchGithub, searchGithubUser] = useState ({
 Candidate: ''
});
  return <h1>CandidateSearch</h1>;
    <p>Candidate</p>
};

export default CandidateSearch;
