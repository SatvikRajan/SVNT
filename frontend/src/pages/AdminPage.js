import React, { useEffect, useState } from 'react';
import company from '../images/logo1.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/admin-main.css';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import backArrow from "../images/admin-main/back-arrow.svg";
import pointer from "../images/admin-main/pointer.svg";

export default function AdminPage() {

    const [candidates, setCandidates] = useState([]);
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
            await axios.delete(`http://localhost:8080/api/candidates/${id}`);
            setCandidates(candidates.filter(candidate => candidate._id !== id));
        } catch (error) {
            console.error('Error deleting candidate:', error);
        }
    };

    const ResumeLinkComponent = (params) => {
        return (
            <Link
                to={`http://localhost:8080/${params.value}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Download Resume
            </Link>
        );
    };

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
            <div className="top">
                <img src={company} width='400rem' alt="company" />
            </div>
            <div className='admin-super'>
                <h1 className='admin-head'>Applications</h1>
                <div className='admin-cont'>
                    <div className="admin-left">
                        <div style={{ display: "flex" }}>
                            <img alt='pointer' src={pointer} style={{ display: view === 'form' ? 'block' : 'none' }} />
                            <p
                                onClick={() => setView('form')}
                                style={{ cursor: 'pointer', color: view === 'form' ? '#DC1615' : 'black' }}
                            >
                                Add Vacancy
                            </p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <img alt='pointer' src={pointer} style={{ display: view === 'form' ? 'none' : 'block' }} />
                            <p
                                onClick={() => setView('table')}
                                style={{ cursor: 'pointer', color: view === 'form' ? 'black' : '#DC1615' }}
                            >
                                Received
                            </p></div>
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
                                        <label>Required Skills</label>
                                        <input type="text" name="requiredskills" value={job.requiredskills} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit">Create Job</button>
                        </form>
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
                                        customButtonComponent: CustomButtonComponent, // Register the custom component
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
