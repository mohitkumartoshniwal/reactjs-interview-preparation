import { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    id: 1,
    title: "Accordion Item #1",
    body: "Item #1 accordion body",
  },
  {
    id: 2,
    title: "Accordion Item #2",
    body: "Item #2 accordion body",
  },
  {
    id: 3,
    title: "Accordion Item #3",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem!",
  },
];

const Accordion = () => {
  const [openId, setOpenId] = useState();

  return (
    <div className="accordion-container">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          isOpen={item.id === openId}
          selectItem={() => {
            // If the accordion item is already opened then when we again click on it then it should close itself
            if (openId === item.id) {
              setOpenId(null);
            } else {
              setOpenId(item.id);
            }
          }}
          {...item}
        />
      ))}
    </div>
  );
};

export default Accordion;
