import React, { useEffect, useState } from 'react';
import company from '../images/logo1.png';
import axios from 'axios';

export default function AdminPage() {
    const [candidates, setCandidates] = useState([]);
    const [job, setJob] = useState({
        title: '',
        employmentType: '',
        experience: '',
        primaryskills: '',
        requiredskills: '',
    });

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get('http://localhost:8080/candidates');
                setCandidates(response.data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            }
        };

        fetchCandidates();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/admin/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(job),
            });
            const data = await response.json();
            console.log('Job created successfully:', data);
        } catch (error) {
            console.error('Error creating job:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/candidates/${id}`);
            setCandidates(candidates.filter(candidate => candidate._id !== id));
        } catch (error) {
            console.error('Error deleting candidate:', error);
        }
    };

    return (
        <div>
            <div className="top">
                <img src={company} width='400rem' alt="" />
            </div>
            <div className="admin-left">
                <h1>Applications</h1>
                <a href=""></a><p>Add Vacancy</p>
                <p>Received</p>
                <p>Add Vacancy</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Job Title:</label>
                    <input type="text" name="title" value={job.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Employment Type:</label>
                    <select name="employmentType" value={job.employmentType} onChange={handleChange} required>
                        <option value="">Select Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>
                <div>
                    <label>Experience:</label>
                    <input type="text" name="experience" value={job.experience} onChange={handleChange} />
                </div>
                <div>
                    <label>Primary Skills:</label>
                    <input type="text" name="primaryskills" value={job.primaryskills} onChange={handleChange} />
                </div>
                <div>
                    <label>Required Skills:</label>
                    <input type="text" name="requiredskills" value={job.requiredskills} onChange={handleChange} />
                </div>
                <button type="submit">Create Job</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Total Experience</th>
                        <th>Relevant Experience</th>
                        <th>Resume</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate) => (
                        <tr key={candidate._id}>
                            <td>{candidate.name}</td>
                            <td>{candidate.email}</td>
                            <td>{candidate.phone}</td>
                            <td>{candidate.totalExperience}</td>
                            <td>{candidate.relevantExperience}</td>
                            <td>
                                {candidate.resumePath && (
                                    <a href={`http://localhost:8080/${(candidate.resumePath)}`} target="_blank" rel="noopener noreferrer">
                                        {candidate.resumePath}
                                    </a>
                                )}
                            </td>
                            <td>
                                <button onClick={() => handleDelete(candidate._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
