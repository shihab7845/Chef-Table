import React, { useEffect, useState } from 'react';
import Card from './Card';
import Cooktable from './Cooktable';

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [cookitems,setcookitems] = useState([])
  const [count,setcount]=useState(0)


  useEffect(() => {
    fetch('Recipe.json')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);

  const handleBtn = (card) => {
    const itemExists = cookitems.find(item => item.recipe_id === card.recipe_id);
    if (!itemExists) {
        setcookitems([...cookitems, card]);
        setcount(count+1)
    }
    
  };
  

  return (
    <div className="w-3/4 mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {cards.map(card => (
          <Card
          handleBtn={handleBtn}
           key={card.recipe_id} 
           card={card}

           />
        ))}

        {/* for cook items table  */}

        <Cooktable 
        cookitems={cookitems}
        count={count}

        ></Cooktable>

      </div>
    </div>
  );
}
