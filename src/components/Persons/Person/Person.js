import React, {Component} from 'react';
import "./Person.css"

class Person extends Component{
    render(){
        console.log("[Person.js] rendering...");
        return(
            <div className="Person">
                 <input 
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                 />
                <p onClick={this.props.click}>my name is {this.props.name} and age is {this.props.age}</p>
            </div>
            
        ) 
    }
}
// const person =(props)=>{
//     console.log("[Person.js] rendering...");
//     return(
//         <div className="Person">
//              <input 
//                 type="text"
//                 onChange={props.changed}
//                 value={props.name}
//              />
//             <p onClick={props.click}>my name is {props.name} and age is {props.age}</p>
//         </div>
        
//     )
// }

export default Person;