import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <div className="navbar-wrapper" style={{ position: 'relative', height: '70px' }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand "  to="/">INSTA MEDS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/symptom-check">Diagnosis</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
