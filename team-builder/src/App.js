import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Teammate from './Teammate';
import Form from './Form';

const initialTeam = [
{
  id: uuid(),
  teammate: 'test',
  email: 'test@email.com',
  role: 'Web Developer',
},
];


const initialFormValues = {
  teammate: "",
  email: "",
  role: "",
};


function App() {
  const [team, setTeam] = useState(initialTeam)
  const [ formValues, setFormValues ] = useState(initialFormValues);

  const onInputChange = e => {
    const { name } = e.target;
    const { value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  };  
    const onSubmit = e => {
      e.preventDefault();

      if(
        !formValues.teammate.trim() ||
        !formValues.email.trim() ||
        !formValues.role.trim() 
      ) {
        return;
      }

      const newTeam = { ...formValues, id: uuid() };

      setTeam([ newTeam, ...team]);

      setFormValues(initialFormValues);
    };

    return (
      <div className="App">
      <h1> Team List </h1>
      <Form 
       values={formValues} 
       onInputChange={onInputChange}
       onSubmit={onSubmit}/>
      { team.map((person) =>{
        return( <Teammate key={person.id} details={person} />)
      })}
      </div>
    );

};




export default App;
