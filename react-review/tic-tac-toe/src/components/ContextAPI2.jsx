import React from 'react';
import PersonContext from '../contexts/PersonContext';

// 클래스방식
export default class ContextAPI extends React.Component{
  static contextType = PersonContext;
  render() {
    const persons = this.context;
    return (
        <ul>
          {persons.map(person => (
            <li>{person.name}</li>
          ))}
        </ul>
      );
  }
  
  
}