import Header from './components/Header';
import Board from './components/Board';
import './styles/App.css';

import React, { useEffect, useState } from 'react';



function App() {

  // ##########################################
  // DATA
  // ##########################################

  const cards = [
      {id: 0, imgLink: "#", text: "card0"},
      {id: 1, imgLink: "#", text: "card1"},
      {id: 2, imgLink: "#", text: "card2"},
      {id: 3, imgLink: "#", text: "card3"},
      {id: 4, imgLink: "#", text: "card4"},
      {id: 5, imgLink: "#", text: "card5"}
    ];

    const shuffleDisplayOrder = () => {
      return [0,1,2,3,4,5].sort(() => Math.random() - 0.5);
    }


  // ##########################################
  // HOOKS
  // ##########################################

  // clickCount to control the useEffect
  // useEffect was not made dependent on newCardIdSelected because
  // when the new card selected is the same as the last card selected,
  // then the "newCardIdSelected" state is not updated and of course,
  // the useEffect is not triggered, therefore not intended effect..
  // instead a clickCount was chosen to trigger useEffect.
  const [clickCount, setClickCount] = useState(0);

  const [cardDisplayOrder, setCardDisplayOrder] = useState(shuffleDisplayOrder());

  const [newCardIdSelected, setNewCardIdSelected] = useState(-1);
  const [cardIdsSelected, setCardIdsSelected] = useState([]);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);



  useEffect(() => {

    if (clickCount > 0) {

            // _________________________IF CARD SELECTED, CHECKS:
            // check if the card selected was already selected
            // filter the cards with this index (if no card then continue)
            let alreadySelected = cardIdsSelected.filter( cardi => cardi == newCardIdSelected).length > 0;
            console.log(alreadySelected)

            if (alreadySelected) {

                // restart/initialise:
                setClickCount(0);
                setScore(0);
                setCardIdsSelected([]);

            } else {

                // add the new selected card index in the cards selected array:
                setCardIdsSelected( cardIdsSelected.concat(newCardIdSelected) );

                // set a new variable for the new score in order to inject to both
                // score and bestScore states (avoids async issues):
                let newscore = score + 1;
                setScore(newscore);
                setBestScore( newscore > bestScore? newscore : bestScore );              

            }

            // _________________________RANDOMIZE THE CARD ORDER:    
            // randomise the card order 
              setCardDisplayOrder(shuffleDisplayOrder());
    }

  }, [clickCount]
  );


  // ##########################################
  // FUNCTIONS
  // ##########################################

  const addNewCardSelected = (e) => {
    setClickCount(clickCount + 1);      
    const selectedCardIndex = e.target.attributes.cardindex.value;
    setNewCardIdSelected(selectedCardIndex);
  }

  const data = {
    cards: cards,
    cardDisplayOrder: cardDisplayOrder,
    cardIdsSelected: cardIdsSelected,
    score: score,
    bestScore: bestScore,
  }
  const methods = {
    addNewCardSelected: addNewCardSelected,
  }

  return (
      <div className="div-cont">
        <Header className="header" data={data}></Header>
        <Board className="board" data={data} methods={methods}></Board>
      </div>
  );
}

export default App;
