import React, { Component } from 'react';
import {Card,CardTitle} from 'react-materialize'
import './CardPublish.css'

import CardDog from '../CardDog/CardDog'

class CardPublish extends Component {

    render(){
        return(
        <div className="CardPublish">
            <CardDog> </CardDog>
        </div>
        );
    }

}

export default CardPublish;