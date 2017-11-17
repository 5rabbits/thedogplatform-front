import React, { Component } from 'react';
import {Card,CardTitle} from 'react-materialize'
import './CardPublish.css'

class CardPublish extends Component {

    render(){
        return(
        <div className="CardPublish">
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
            <Card className='CardChild'
            header={<CardTitle image='./static/sample-1.jpg'>Card Title</CardTitle>}
            actions={[<a href='#'>+información</a>]}>
            A un abuelito se le perdió el perrito..
            </Card>
        </div>
        );
    }

}

export default CardPublish;