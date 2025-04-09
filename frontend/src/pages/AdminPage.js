import React, { useEffect, useState } from 'react';
import company from '../images/logo1.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../css/admin-main.css';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import backArrow from "../images/admin-main/back-arrow.svg";
import pointer from "../images/admin-main/pointer.svg";

export default function AdminPage() {
    const navigate = useNavigate();
    const [candidates, setCandidates] = useState([]);
    const [jobs, setJobs] = useState([]); // Jobs state to manage vacancies
    const [job, setJob] = useState({
        title: '',
        employmentType: '',
        experience: '',
        primaryskills: '',
        requiredskills: '',
    });
    const [showPopup, setShowPopup] = useState(false);
    const [view, setView] = useState('form');

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get('https://svnt-backend1-summer-star-9951.fly.dev/candidates');
                setCandidates(response.data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            }
        };

        fetchCandidates();
    }, []);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('https://svnt-backend1-summer-star-9951.fly.dev/api/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://svnt-backend1-summer-star-9951.fly.dev/admin/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(job),
            });
            if (response.ok) {
                setJob({
                    title: '',
                    employmentType: '',
                    experience: '',
                    primaryskills: '',
                    requiredskills: '',
                });
                setShowPopup(true);
            } else {
                console.error('Error creating job:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating job:', error);
        }
    };

    const CustomButtonComponent = (params) => {
        const handleClick = () => {
            handleDelete(params.data._id);
        };

        return <button className='btn' onClick={handleClick}>Delete</button>;
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://svnt-backend1-summer-star-9951.fly.dev/api/candidates/${id}`);
            setCandidates(candidates.filter(candidate => candidate._id !== id));
        } catch (error) {
            console.error('Error deleting candidate:', error);
        }
    };

    const ResumeLinkComponent = (params) => {
        return (
            <Link
                to={`https://svnt-backend1-summer-star-9951.fly.dev/${params.value}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Download Resume
            </Link>
        );
    };

    const handleDeleteClick = async (job) => {
        try {
            await axios.delete(`https://svnt-backend1-summer-star-9951.fly.dev/api/jobs/${job._id}`);
            setJobs(jobs.filter((item) => item._id !== job._id)); // Remove the deleted job from the state
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    const handleSignOut = () => {
        localStorage.clear();
        navigate('/login')
    }

    const closePopup = () => {
        setShowPopup(false);
    };

    const columnDefs = [
        { headerName: "Name", field: "name", filter: true },
        { headerName: "Email", field: "email", filter: true },
        { headerName: "Phone", field: "phone", filter: true },
        { headerName: "Total Experience", field: "totalExperience", filter: true },
        { headerName: "Relevant Experience", field: "relevantExperience", filter: true },
        {
            headerName: "Resume",
            field: "resumePath",
            cellRenderer: ResumeLinkComponent,
            // cellRendererParams: {
            //     onClick: handleDelete,
            // },
        },
        {
            headerName: "Actions",
            field: "actions",
            cellRenderer: CustomButtonComponent,
            cellRendererParams: {
                onclick: handleDelete,
            },
        }
    ];

    return (
        <div>
            <div className="top d-flex justify-content-between">
                <img src={company} width='400rem' alt="company" />
                <button style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }} onClick={handleSignOut}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"></path>
                    </svg>
                </button>
            </div>
            <div className='admin-super'>
                <h1 className='admin-head'>Applications</h1>
                <div className='admin-cont'>
                    <div className="admin-left">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img alt='pointer' src={pointer} style={{ display: view === 'form' ? 'block' : 'none' }} />
                            <p
                                onClick={() => setView('form')}
                                style={{ cursor: 'pointer', color: view === 'form' ? '#DC1615' : 'black' }}
                            >
                                Add Vacancy
                            </p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img alt='pointer' src={pointer} style={{ display: view === 'table-1' ? 'block' : 'none' }} />
                            <p
                                onClick={() => setView('table-1')}
                                style={{ cursor: 'pointer', color: view === 'table-1' ? '#DC1615' : 'black' }}
                            >
                                Delete Vacancy
                            </p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img alt='pointer' src={pointer} style={{ display: view === 'table' ? 'block' : 'none' }} />
                            <p
                                onClick={() => setView('table')}
                                style={{ cursor: 'pointer', color: view === 'table' ? '#DC1615' : 'black' }}
                            >
                                Received
                            </p>
                        </div>
                    </div>


                    {view === 'form' && (
                        <form className='vacancy-form' onSubmit={handleSubmit}>
                            <p>Add Vacancy</p>
                            <div className='vacancy-form-div1'>
                                <img alt='back' src={backArrow} />
                                <div className='sub-part'>
                                    <div>
                                        <label>Job Title:</label>
                                        <input type="text" name="title" value={job.title} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label>Employment Type:</label>
                                        <select name="employmentType" value={job.employmentType} onChange={handleChange} required>
                                            <option value="" disabled>Select Type</option>
                                            <option value="Full Time">Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                            <option value="Contract">Contract</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Experience:</label>
                                        <input type="number" name="experience" value={job.experience} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label>Primary Skills:</label>
                                        <input type="text" name="primaryskills" value={job.primaryskills} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label>Required Skills:</label>
                                        <input type="text" name="requiredskills" value={job.requiredskills} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit">Create Job</button>
                        </form>
                    )}

                    {view === 'table-1' && (
                        <div className='table-1 table'>
                            <table className="styled-table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((job) => (
                                        <tr key={job._id}>
                                            <td>{job.title}</td>
                                            <td>
                                                <button className="delete-button" onClick={() => handleDeleteClick(job)}>
                                                    Delete Vacancy
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}


                    {view === 'table' && (
                        <div className='table'>
                            <div className="ag-theme-alpine" style={{ height: '100%', width: '100%', marginRight: '10%' }}>
                                <AgGridReact
                                    rowData={candidates}
                                    columnDefs={columnDefs}
                                    pagination={true}
                                    paginationPageSize={10}
                                    frameworkComponents={{
                                        customButtonComponent: CustomButtonComponent,
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <h2>Vacancy Created</h2>
                            <button onClick={closePopup}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
