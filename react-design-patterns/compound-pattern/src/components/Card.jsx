export const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

const Body = ({ text }) => {
  return <p>{text}</p>;
};

Card.Title = Title;
Card.Body = Body;
