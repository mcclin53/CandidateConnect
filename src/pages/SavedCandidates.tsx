import { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setCandidates(candidates);

  }, []);

  const removeCandidate = (login: string) => {
    const updatedCandidates = candidates.filter(
      (candidate) => candidate.login !== login
    );
    setCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div>
      <h1>Potential Candidates</h1>
      {candidates.length === 0 ? (
        <p>No candidates selected.</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Company</th>
                <th>Bio</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.login}>
                  <td>
                    <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`}/>
                  </td>
                  <td>{candidate.login}</td>
                  <td>{candidate.location}</td>
                  <td><a href={`mailto:${candidate.email}`}>{candidate.email}</a></td>
                  <td>{candidate.company}</td>
                  <td>{candidate.bio}</td>
                  <td>
                    <button onClick={() => removeCandidate(candidate.login)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      )}
    </div>
  );
};

export default SavedCandidates;
