import { useContext } from 'react';
import PersonContext from '../contexts/PersonContext';

// consumer 방식
export default function ContextAPI(){
  const persons = useContext(PersonContext);
  return (
      <ul>
        {persons.map(person => (
          <li>{person.name}</li>
        ))}
      </ul>
  );
}