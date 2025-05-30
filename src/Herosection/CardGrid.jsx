import React from "react";
import TallCard from "./TallCard";

import card1 from "../resources/acard1.png";
import card11 from "../resources/acard1.1.png";
import card2 from "../resources/acard2.png";
import card22 from "../resources/acard2.2.png";
import card3 from "../resources/acard3.png";
import card33 from "../resources/acard3.3.png";
import card4 from "../resources/acard4.png";
import card44 from "../resources/acard4.4.png";
import card5 from "../resources/acard5.png";
import card55 from "../resources/acard5.5.png";
import card6 from "../resources/acard6.png";
import card66 from "../resources/acard6.6.png";
import card7 from "../resources/acard7.png";
import card77 from "../resources/acard7.7.png";
import card8 from "../resources/acard8.png";
import card88 from "../resources/acard8.8.png";

const cards = [
  { front: card1, hover: card11, badge: "New" },
  { front: card2, hover: card22, badge: "Hot" },
  { front: card3, hover: card33, badge: "New" },
  { front: card4, hover: card44, badge: "Hot" },
  { front: card5, hover: card55, badge: "New" },
  { front: card6, hover: card66, badge: "Hot" },
  { front: card7, hover: card77, badge: "New" },
  { front: card8, hover: card88, badge: "Hot" },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-8 p-6">
      {cards.map((card, index) => (
        <TallCard
          key={index}
          frontImage={card.front}
          hoverImage={card.hover}
          badgeType={card.badge}
        />
      ))}
    </div>
  );
};

export default CardGrid;
