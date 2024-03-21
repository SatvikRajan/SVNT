import React, { useState } from "react";

const JobApplication = () => {
  const [showForm, setShowForm] = useState(false);

  const handleApplyNow = () => {
    setShowForm(true);
  };

  const handleBack = () => {
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <ApplicationForm onBack={handleBack} />
      ) : (
        <JobDescription onApplyNow={handleApplyNow} />
      )}
    </div>
  );
};

const JobDescription = ({ onApplyNow }) => {
  return (
    <div>
      <h1>Job Title</h1>
      <p>Job Description...</p>
      <button onClick={onApplyNow}>Apply Now</button>
    </div>
  );
};

const ApplicationForm = ({ onBack }) => {
  return (
    <div>
      <h1>Application Form</h1>
      <form>
        {/* Form fields */}
        <button type="submit">Submit</button>
      </form>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default JobApplication;
