import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Frontpage from './Frontpage.jsx';
import App from './App.jsx';
import Appointment from './Appointment.jsx';

function Page() {
  return (
    <>
      <Router>
        <Navbar />
          <Route exact path='/'>
            <Frontpage />
          </Route>
          <Route exact path='/symptom-check'>
            <App />
          </Route>
          {/* <Route exact path='/book-doctor'>
            <Appointment />
          </Route> */}
      </Router>

    </>
  );
}

export default Page;