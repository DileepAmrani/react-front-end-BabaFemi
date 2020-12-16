import React from 'react';
import './card.css';

export default class Card extends React.Component{
    render(){
        return(
             <div className="_cardDiv">
                 <img src={this.props.data.cardImage} className="_cardImage" alt="cardImage"/>
              <p className="_cardTitle">{this.props.data.cardTitle}</p>
              <p className="_cardDes">{this.props.data.cardDes}</p>
             </div>
        )
        
    }
}