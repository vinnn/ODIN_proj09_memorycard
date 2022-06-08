import React from "react";
import '../styles/Board.css';

export default function Board ( { data, methods } ) {

    // destructure:
    const { cards, cardDisplayOrder, cardIdsSelected, score, bestScore } = data;
    const { addNewCardSelected } = methods;

    return (

        <div className="div-board">

            { cardDisplayOrder.map( (iorder) => { 
                return (
                    <div 
                        className="card" 
                        key={iorder} 
                        cardindex={cards[iorder].id} 
                        onClick={ addNewCardSelected }
                        style={{
                            color: cards[iorder].textColor, 
                            backgroundColor: cards[iorder].color, 
                            }}
                        >
                    {cards[iorder].color}
                    </div>
                )
            })}

        </div>
    );
}

