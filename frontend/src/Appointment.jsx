import React from 'react';
import All_Cards from './components/All_Cards';
import Diagnosis from './components/Diagnosis';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import './index.css';

const Appointment = (props) => {
  // Check if props.location exists and has state with predictedDisease
  const predictedDisease = props.location && props.location.state && props.location.state.predictedDisease;
  console.log(predictedDisease);

  return (
    <>
      <Diagnosis title={predictedDisease} subtitle="Details about the disease"/>
      <All_Cards bgop = "bg-blue-1" b1="bg-gray-100" b2="bg-indigo-100" d1="" d2 = "" n1 ="Dr. Gaurav" n2 ="Dr. Garuav Saxena" />
      <All_Cards bgop ="bg-blue-100" b1="bg-pink-100" b2="bg-gray-100" n1="Dr. Vikas Chauhan" n2 ="Dr. Chetan Chaupati " d1 = "" d2="" />

      <footer className="bg-black">      
        <section className="m-auto my-10 px-6">
          <Link
            to="/symptom-check"
            className="block bg-black text-white text-center py-4 px-6 rounded-xl hover-bg-gray-700"
          >Have different symptoms!? Enter Here</Link>
        </section>
      </footer> 
    </>
  );
}

// Define propTypes for the component
Appointment.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      predictedDisease: PropTypes.string.isRequired // Ensure predictedDisease is a required string
    })
  })
};

export default Appointment;