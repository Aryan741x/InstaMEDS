import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.jsx';
import { Link, withRouter } from 'react-router-dom'; // Import withRouter

const SymptomChecker = ({ history }) => { // Pass history as props
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('prognosis');
  const [prediction, setPrediction] = useState(null);
  const [prognosis, setPrognosis] = useState('');
  const [medications, setMedications] = useState([]);
  const [precautions, setPrecautions] = useState([]);

  useEffect(() => {
    fetchSymptoms();
  }, []);

  useEffect(() => {
    if (prediction) {
      fetchDiseaseInfo(prediction);
    }
  }, [prediction]);

  const fetchSymptoms = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      if (!response.ok) {
        throw new Error('Failed to fetch symptoms');
      }
      const data = await response.json();
      setSymptoms(data.symptoms);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching symptoms:', error);
    }
  };

  const fetchDiseaseInfo = async (prediction) => {
    try {
      const response = await fetch('http://localhost:5000/desc_disease', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prediction })
      });

      if (response.ok) {
        const data = await response.json();
        setPrognosis(data.description);
        setMedications(data.medications);
        setPrecautions(data.precautions);
      } else {
        console.error('Failed to fetch disease information:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching disease information:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/store_symptoms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ symptoms: selectedSymptoms, allSymptoms: symptoms })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Symptoms stored:', data.selected_symptoms);
        console.log('Prediction received:', data.prediction);
        setPrediction(data.prediction);
        setSelectedSymptoms([]);
        // Navigate to Appointment component with predicted disease data
        // history.push('/book-doctor', { predictedDisease: data.prediction });
      } else {
        console.error('Failed to store symptoms:', response.statusText);
      }
    } catch (error) {
      console.error('Error storing symptoms:', error);
    }
  };

  const handleSymptomChange = (selectedOptions) => {
    setSelectedSymptoms(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='Main-box'>
        <div className="symptom-checker-container">
          <h1 className="symptom-checker-title">Add your symptoms</h1>
          <h3 className="symptom-checker-description">
            A ML based technique that gives prognosis of the disease based on symptoms experienced by patient along with the precautions and medications
          </h3>
          <h1>Symptoms List</h1>
          <h3>Please use the search bar for adding symptoms</h3>
          <form className="symptom-form" onSubmit={handleSubmit}>
            <label htmlFor="symptoms">Select Symptoms:</label><br />
            <Select
              className="selectbox sys"
              options={symptoms.map(symptom => ({ value: symptom, label: symptom }))}
              isMulti
              value={selectedSymptoms.map(symptom => ({ value: symptom, label: symptom }))}
              onChange={handleSymptomChange}
              placeholder="Select Symptoms"
            />
            <br />
            <input type="submit" value="Submit" className="submit-button mt-3" />
          </form>
          <nav className="navbar1 navbar-light">
            <button className={`btn ${activeTab === 'prognosis' ? 'btn-primary active' : 'btn-secondary'}`} onClick={() => handleTabClick('prognosis')}>Prognosis</button>
            <button className={`btn ${activeTab === 'medication' ? 'btn-primary active' : 'btn-secondary'}`} onClick={() => handleTabClick('medication')}>Medication</button>
            <button className={`btn ${activeTab === 'precautions' ? 'btn-primary active' : 'btn-secondary'}`} onClick={() => handleTabClick('precautions')}>Precautions</button>
          </nav>
          <div className="additional-info-container">
            {activeTab === 'prognosis' && (
              <div className="tab-content">
                <h2>Disease</h2>
                {prediction && <p>Predicted Disease: {prediction}</p>}
                <p>{prognosis}</p>
              </div>
            )}
            {activeTab === 'medication' && (
              <div className="tab-content">
                <h2>Recommended Medicines</h2>
                <ul>
                  {medications.map((medication, index) => (
                    <li key={index}>{medication}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'precautions' && (
              <div className="tab-content">
                <h2>Precautions</h2>
                <ul>
                  {precautions.map((precaution, index) => (
                    <li key={index}>{precaution}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="button-container">
            {/* <Link to="/symptom-check" className="diagnosis-button">
              <button className="btn">CLICK FOR DIAGNOSIS</button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(SymptomChecker); // Wrap SymptomChecker component with withRouter
