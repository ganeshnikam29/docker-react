import React ,{Component} from 'react';

import Person from './Person/Person'

//Class Component

class Persons extends Component {
  // static getDerivedStateFromProps(props,state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shuldComponentUpdate')
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return({message:'Snapshot !'})
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[Pesrons.js] componentDidUpdate')
    console.log(snapshot)
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
// Function Component

// const persons = (props) => {
//   console.log("[Persons.js] rendering...");
//   return props.persons.map((person, index) => {
//     return (
//       <Person
//         click={() => props.clicked(index)}
//         name={person.name}
//         age={person.age}
//         key={person.id}
//         changed={(event) => props.changed(event, person.id)}
//       />
//     );
//   });
// };

    

export default Persons;