import React from 'react';
import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import PatientManagement from './PatientManagement/PatientManagement';


function App() {
 
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
