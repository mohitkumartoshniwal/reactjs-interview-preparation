/**
 * Additional vaildations for props can be added using @see https://www.npmjs.com/package/prop-types
 */

const AccordionItem = ({ isOpen, selectItem, title, body }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-item__title" onClick={selectItem}>
        <span>{title}</span>
        <span>{isOpen ? "👆" : "👇"}</span>
      </div>
      {isOpen && <div>{body}</div>}
    </div>
  );
};

export default AccordionItem;
