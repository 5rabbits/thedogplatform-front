import React, { Component } from 'react';
import {Input , Row, Dropdown, Button, Icon, NavItem} from  'react-materialize'

class FormDog extends Component {
		constructor(props) {
	    super(props);
	    this.state = {dogName: '', aggressiveness: '', dogAge: '', dogColor: '', dogRace: '',dogSize: ''};

	    this.handleChange = this.handleChange.bind(this);
	    this.sendInformation = this.sendInformation.bind(this);

	}
	  handleChange(event) {
  			  //this.setState({value: event.target.value});
  			  this.state.aggressiveness = event.target.value

  		}
  	sendInformation(event){
  		event.preventDefault();
    		console.log('The link was clicked.');
  	}
  	
    render(){
        return(
       <div className='FormDog-description'>
	     	<Row>
				<Input placeholder="Ingrese el nombre del perro perdido" s={12} label="Nombre*" value = {this.state.dogName} />
							
				<Input s={12} type='select' label="Nivel de Agresividad" onChange={this.handleChange}  >
					<option value='1'> Bajo  </option>
					<option value='2'> Medio </option>
					<option value='3'> Alto  </option>
				</Input>
				
				<Input placeholder="Ingrese la edad del perro perdido"  s={6} label="Edad" value ={this.state.dogAge} />
				<Input placeholder="Ingrese el color del perro perdido" s={6} label="Color"  value ={this.state.dogColor}/>
				<Input placeholder="Ingrese la raza del perro perdido" 	s={6} label="Raza"  value ={this.state.dogRace}/>
				<Input placeholder="Ingrese el tamaño del perro perdido"s={6} label="Tamaño" value ={this.state.dogSize} />
				
			</Row>
		<Button waves='teal' node='a' onClick = {this.sendInformation} > Registrar perro  </Button>
        </div>

        );
    }

}

export default FormDog;