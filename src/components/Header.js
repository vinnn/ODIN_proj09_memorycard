import React from "react";
import '../styles/Header.css';

export default function Header ( {data } ) {

    // destructure:
    const { cards, cardsOrder, cardsSelected, score, bestScore } = data;

    return (
        <div className="div-header">
            <div className="div-title">MEMORY CARD GAME</div>        
            <div className="div-score">SCORE {score}</div>
            <div className="div-bestscore">BEST SCORE {bestScore}</div>
        </div>
    );
}

