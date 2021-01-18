import './App.css';
import { Component } from 'react';

class App extends Component {


  state ={
    nombre:0,
  }

  chgNbr = (a) =>{
    let nbr = this.state.nombre
    if (a === "+"){
      nbr += 1;
    }else{
      nbr -=1;
    };
    this.setState({
      nombre: nbr
    })
  };

  chgCouleur = (e) => {
    let nbr = e.target.parentElement.parentElement.querySelector('span');
    let color1 = nbr.classList.toggle('red');
    if(color1){
      e.target.textContent = 'noir';
    }else {
      e.target.textContent = 'rouge';
    };
  };


render(){

    return (
      <div className="App">
     
          <h1>Exercice 11</h1>
          <span>{this.state.nombre}</span>
          <br/>
          <br/>
          <button onClick={()=>{this.chgNbr("+")}}>ajouter</button>
          <br/>
          <br/>
          <button onClick={()=>{this.chgNbr("-")}}>retirer</button>
          <br/>
          <br/>
          <button onClick={this.chgCouleur}>rouge</button>
      
      </div>
    );
  }
}
export default App;
