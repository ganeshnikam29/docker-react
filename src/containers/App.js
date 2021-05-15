import './App.css';
import Persons from '../components/Persons/Persons';
import { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props){
    super(props)
    console.log("[App.js] constructor")
    this.setState();
  }


  state ={
    persons : [
      {id :"1" ,name : 'Ganesh', age: '30'},
      {id :"2", name : 'Anvi', age: '15'}
     ],
     showPerson : false 
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props)
    return state;
  }
  
  componentDidMount(){
    console.log('[App.js] componetDidMount');
  }

  switchNameHandler =(newName) => {
    //console.log('Button Clicked')
    this.setState ({
      persons : [
        {name : newName, age: '30'},
        {name : 'Anvi', age: '10'}
       ]
    })
  }

  nameChangeHandeler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex]= person;
    
    this.setState ({persons : persons  })
  }

  deletePersonHandler =(personIndex)=>{
    // const persons = this.state.persons.slice();
     const persons =[...this.state.persons]  //Spread Operator
     persons.splice(personIndex,1);
     this.setState({persons:persons})

  }

  togglePersonHandler =()=>{
    const doesShow =this.state.showPerson
    this.setState({showPerson : !doesShow})
  }

  render(){
    console.log('[App.js ] render ')

    let person = null;
    if(this.state.showPerson){
      person =(
        <div>
          <Persons
            persons ={this.state.persons}
            clicked ={this.deletePersonHandler}
            changed ={this.nameChangeHandeler}          
          />
        </div>
      )
    }
    return (  
      <div className="App">
        <Cockpit 
          title={this.props.appTitle}
          showPerson= {this.state.showPerson}
          persons = {this.state.persons}
          clicked ={this.togglePersonHandler}
        />
        {person}
      </div>
    );
  }

}
export default App;