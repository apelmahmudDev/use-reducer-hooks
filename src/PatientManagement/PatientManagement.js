import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../components/reducers/patientReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            tyep: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        })
        nameRef.current.value ="";     
    }
    return (
        <div>
            <h1>Patient Mangement: {state.patients.length}</h1>

            <form onSubmit={handleSubmit}>
                <input ref={nameRef}/>
            </form>
        </div>
    );
};

export default PatientManagement;