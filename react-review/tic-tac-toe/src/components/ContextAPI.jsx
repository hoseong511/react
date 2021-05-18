import PersonContext from '../contexts/PersonContext';

// consumer 방식
export default function ContextAPI(){
  return (
  <PersonContext.Consumer>
    {(persons) => (
      <ul>
        {persons.map(person => (
          <li>{person.name}</li>
        ))}
      </ul>
    )}
  </PersonContext.Consumer>
  );
}