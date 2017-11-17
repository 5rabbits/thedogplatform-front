import React, { Component } from 'react';
import {Card,CardTitle} from 'react-materialize'
import './CardDog.css'

class CardDog extends Component {

    render(){
        return(
            <Card className='CardDogChild'
            header={<CardTitle image='./static/sample-1.jpg'>{this.props.title}</CardTitle>}
            actions={[<a href='#'>+ información</a>]}>

            <div className="CardDog-state">
               {this.props.state}
            </div>
            <div className="CardDog-place">
               {this.props.place}
            </div>
            <div className="CardDog-date">
               {this.props.date}
            </div>
            <div className="CardDog-description">
               {this.props.description}
            </div>
            </Card>
        );
    }

}

export default CardDog;