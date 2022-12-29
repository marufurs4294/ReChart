import logo from './logo.svg';
import './App.css';
import Navbar from './comopnents/Navbar/Navbar';
import Pricing from './comopnents/Pricing/Pricing';
import AssignmentMarks from './comopnents/AssignmentMarks/AssignmentMarks';
import PhoneBar from './comopnents/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
