import React from "react";
import './CardList.css';
import { Card } from "..";

/*
creating custom component with props
children are what is written inside the tag of the component eg
<CardList>Leraning React</CardList>
now Leraning React is a children and we can access it by calling props.children
*/
const CardList = (props) => {
    return (
        <div className="card-list">
            {
              props.monsters.map(monster => (
              <Card key={ monster.id } monsters={ monster } />
             )
            )
          }
        </div>
    )
}

export default CardList