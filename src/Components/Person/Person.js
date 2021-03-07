import {React,Component} from 'react';
import './person.css';

class Person extends Component{
    render(){
    return(
        <div className="person">
        <h2>Name:{this.props.name}</h2>
        <button onClick={this.props.changeState}>Change</button>
        </div>)}
}

// class Person extends Component{
//     render(){
//         return(<div className="person">
//             <h2>Name:{this.props.name} </h2>
//             </div>)
//     }
// }


export default Person;