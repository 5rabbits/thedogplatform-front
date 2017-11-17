import React, { Component } from 'react';
import {Card,CardTitle} from 'react-materialize'
import './CardDog.css'

class CardDog extends Component {

    render(){
        return(
            <Card className='CardChild'
            header={<CardTitle image='./static/sample-1.jpg'>{this.props.title}</CardTitle>}
            actions={[<a href='#'>+ información</a>]}>

            <div className="Card-state">
               {this.props.state}
            </div>
            <div className="Card-place">
               {this.props.place}
            </div>
            <div className="Card-date">
               {this.props.date}
            </div>
            <div className="Card-description">
               {this.props.description}
            </div>
            </Card>
        );
    }

}

export default CardDog;